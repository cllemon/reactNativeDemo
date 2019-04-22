import { codeList } from '../package/code';
import { VALUE } from '../common/constance';
import { PermissionsAndroid } from 'react-native';
import REACTNATIVEFS from 'react-native-fs';
import { COMMON_IMAGE_FORMAT } from '../common/enume';

const errorMessage = tip => `请在app/package/code.js 导出【 ${tip} 】模块`;

/**
 * 获取代码块
 */
export const getCodeBlock = (val = []) => {
  if (val.length) {
    if (Array.isArray(val)) {
      const type = val[0];
      return codeList[type] ? codeList[type][val[1]] : errorMessage(type);
    }
    return codeList[val] ? codeList[val] : errorMessage(val);
  }
  return '暂无代码';
};

/**
 * 拼接代码块
 */
export const joinWebCodeBlock = code => {
  return `${
    VALUE.html
  }<pre><code langurage="Prism" style="font-size: 28px;">${code}</code></pre></body></html>\n`;
};

/**
 * 数据工厂
 */
export const dataFactory = (page = 0, count = 25) => {
  const list = [];
  for (let i = count * page; i < count * (page + 1); i++) {
    list.push({
      label: `🍋 ____🌲  ${i}  🌲____ 🍋`,
      value: `data_${i}`
    });
  }
  return list;
};

/**
 * Android 权限
 * @param {String} permissionType 权限类型
 * @param {Object} rationale 配置
 * @returns {Number} 权限结果 0：拒绝 1：同意 -1：拒绝且不再询问
 */
export const requestPermission = async (permissionType, rationale = {}) => {
  try {
    const granted = await PermissionsAndroid.request(permissionType, rationale);
    const RESULT = PermissionsAndroid.RESULTS;
    switch (granted) {
      case RESULT.GRANTED:
        return { code: 1, tip: '授权成功' };
      case RESULT.DENIED:
        return { code: 0, tip: '授权被拒绝' };
      case RESULT.NEVER_ASK_AGAIN:
        return { code: -1, tip: '授权被拒绝且不想再被询问' };
      default:
        return null;
    }
  } catch (error) {
    console.error(`授权处理异常${error}`);
  }
};

/**
 * 授权
 */
export const authorization = async (permission, rationale = {}) => {
  try {
    const PERMISSIONTYPE = PermissionsAndroid.PERMISSIONS[permission];
    const checkResult = await PermissionsAndroid.check(PERMISSIONTYPE);
    if (checkResult) return { code: 1, tip: '已授权' };
    return await requestPermission(PERMISSIONTYPE, rationale);
  } catch (error) {
    console.log('查询授权状态异常：', error);
  }
};

/**
 * Android 文件处理 - 生成本地文件路径
 * @param {String} ABSOLUTEPATH 文档目录的绝对路径
 */
export const generateLocalPath = async (url, format) => {
  try {
    const ABSOLUTEPATH = VALUE.ios
      ? REACTNATIVEFS.LibraryDirectoryPath
      : REACTNATIVEFS.ExternalDirectoryPath;
    const STORAGEPATH = `${ABSOLUTEPATH}/${Date.now()}.${format}`;
    const { statusCode } = await REACTNATIVEFS.downloadFile({
      fromUrl: url,
      toFile: STORAGEPATH
    }).promise;
    if (statusCode === 200) return `file://${STORAGEPATH}`;
    return false;
  } catch (error) {
    console.error('生成本地路径异常', error);
  }
};

/**
 * 截取图片格式
 */
const interceptionImageFormat = url => {
  const format = url.substr(url.lastIndexOf('.') + 1);
  if (!isImageFormat(format)) {
    return 'jpg';
  }
  return format;
};

/**
 * 是否是图片格式
 */
const isImageFormat = format => {
  if (format) {
    return COMMON_IMAGE_FORMAT.indexOf(format.toLowerCase()) !== -1;
  }
  return false;
};
