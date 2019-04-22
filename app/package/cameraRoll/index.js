import React, { Component } from 'react';
import {
  View,
  CameraRoll,
  Text,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';
import Toast from '../../widget/toast';
import { authorization, generateLocalPath } from '../../common/utils';

const COMPONENT_LABEL = '访问本地相册的功能';
const COMPONENT_VALUE = 'CameraRoll';
const CAMERAROLL_IMAGE_LIST = [
  {
    url:
      'https://static.dephotos.cn/storage/image/19d76e343729a5a9e42cc9ab0c232526907cb62f.jpg',
    file: 'https://avatars0.githubusercontent.com/u/9892522?v=4'
  },
  {
    url:
      'https://static.dephotos.cn/storage/image/987ad1a5594aa53d2bc14b3153c4b334bf71dff9.jpg',
    file: 'https://avatars1.githubusercontent.com/u/6128107?v=4'
  },
  {
    url:
      'https://static.dephotos.cn/storage/image/139ac3e968c9f642a927f529848a54bff3ce803b.jpg',
    file: 'https://avatars0.githubusercontent.com/u/2918581?v=4'
  }
];
const REJECTED_ALERT_AUTH = {
  title: '提醒',
  message:
    '由于您之前拒绝了我们对本机进行读写的权限，而此操作需要授权才能完成，现在授权？',
  buttonNeutral: '跳过',
  buttonNegative: '拒绝',
  buttonPositive: '同意'
};
const OPERATE_LIST = [
  {
    label: '选取图片',
    value: {
      first: 30,
      assetType: 'Photos'
    },
    type: 'getPhotos'
  }
];

class CameraRollPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedList: [],
      loading: false
    };
  }

  MessageTips = (message, confirmCB = () => {}, cancelCB = () => {}) => {
    Alert.alert(
      '提示',
      message,
      [
        {
          text: '取消',
          onPress: () => cancelCB(),
          style: 'cancel'
        },
        { text: '确定', onPress: () => confirmCB() }
      ],
      {
        cancelable: false
      }
    );
  };

  _saveToCameraRoll = item => {
    this.MessageTips('确认保存图片到相册？', async () => {
      try {
        const { code, tip } = await authorization(
          'WRITE_EXTERNAL_STORAGE',
          REJECTED_ALERT_AUTH
        );
        if (code === 1) {
          this.setState({ loading: true });
          const localFileUrl = await generateLocalPath(item.file, 'jpg');
          if (localFileUrl) {
            await CameraRoll.saveToCameraRoll(localFileUrl);
            return this.Toast.show(`保存成功, 您可以到相册中查看`);
          }
          return this.Toast.show(`解析本地路径失败，保存图片失败`);
        }
        return this.Toast.show(`${tip || '未授权'} 无法保存图片到相册`);
      } catch (error) {
        this.Toast.show(`保存图片到相册异常`);
        console.log('保存图片到相册异常', error);
      } finally {
        this.setState({ loading: false });
      }
    });
  };

  previewDemoOne = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {CAMERAROLL_IMAGE_LIST.map((item, index) => {
          return (
            <TouchableOpacity
              style={{ margin: 20 }}
              key={index}
              activeOpacity={0.2}
              onLongPress={() => {
                this._saveToCameraRoll(item);
              }}
            >
              <Image
                source={{ uri: item.file }}
                style={{ width: 70, height: 70 }}
              />
            </TouchableOpacity>
          );
        })}
        <Text style={{ textAlign: 'center', padding: 10 }}>
          长按图片试试看...
        </Text>
      </View>
    );
  };

  previewDemoSecond = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: 10
        }}
      >
        {this.state.selectedList.map((item, index) => {
          return (
            <Image
              key={index}
              source={{ uri: item.node.image.uri }}
              style={{ width: 70, height: 70, margin: 10 }}
            />
          );
        })}
        {!this.state.selectedList.length && (
          <Text>尚未选择任何图片, 选几张试试</Text>
        )}
      </View>
    );
  };

  _getPhotos = async (options = {}) => {
    try {
      const { code, tip } = await authorization(
        'READ_EXTERNAL_STORAGE',
        REJECTED_ALERT_AUTH
      );
      if (code === 1) {
        this.setState({ loading: true });
        const { edges, page_info } = await CameraRoll.getPhotos(options);
        this.setState({ selectedList: edges });
        console.log(edges, page_info);
        return true;
      }
      return this.Toast.show(`${tip || '未授权'} 无法读取图片`);
    } catch (error) {
      this.Toast.show(`读取图片异常`);
      console.log(error, '读取图片异常');
    } finally {
      this.setState({ loading: false });
    }
  };

  _onOperate = item => {
    this._getPhotos(item.value);
  };

  render() {
    return (
      <Package
        label={COMPONENT_LABEL}
        value={COMPONENT_VALUE}
        navigation={this.props.navigation}
        loading={this.state.loading}
      >
        {/** demo - 1 */}
        <Card html={[COMPONENT_VALUE, 'FIRST']} codeHeight={1740}>
          {this.previewDemoOne()}
        </Card>

        {/** demo - 2 */}
        <Card
          html={[COMPONENT_VALUE, 'SECOND']}
          codeHeight={1330}
          operateList={OPERATE_LIST}
          onOperate={this._onOperate}
        >
          {this.previewDemoSecond()}
        </Card>
        <Toast
          ref={toast => {
            this.Toast = toast;
          }}
        />
      </Package>
    );
  }
}

export default CameraRollPackage;
