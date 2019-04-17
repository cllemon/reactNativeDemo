import { codeList } from '../package/code';
import { VALUE } from '../common/constance';

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
