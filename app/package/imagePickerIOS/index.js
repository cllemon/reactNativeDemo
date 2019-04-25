import React, { Component } from 'react';
import { View, ImagePickerIOS, Text, Image, Alert } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = 'iOS 平台 - ImagePickerIOS';
const COMPONENT_VALUE = 'ImagePickerIOS';
const OPERATE_LIST = [
  {
    label: '打开相机',
    value: 'openCameraDialog'
  },
  {
    label: '图片选择',
    value: 'openSelectDialog'
  }
];

class ImagePickerIOSPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  _canUseCamera = () => {
    let canUse = false;
    ImagePickerIOS.canUseCamera(val => {
      canUse = val;
    });
    return canUse;
  };

  _onOperate = item => {
    if (item.value === 'openCameraDialog' && !this._canUseCamera()) {
      return Alert.alert(
        '提示',
        '当前设备照相机无法使用',
        [
          {
            text: '确定',
            onPress: () => console.log('OK Pressed')
          }
        ],
        {
          cancelable: false
        }
      );
    }
    ImagePickerIOS[item.value](
      {},
      url => {
        this.setState({ url });
        console.log(item.value + ': 选择成功');
      },
      () => {
        console.log(item.value + ': 用户取消了');
      }
    );
  };

  previewDemoOne = () => {
    return (
      <View style={{ flexDirection: 'column', paddingVertical: 20 }}>
        <Text>当前选择的图片:</Text>
        <Image
          style={{ width: 300, height: 200, marginVertical: 20 }}
          source={{ uri: this.state.url }}
        />
      </View>
    );
  };

  render() {
    return (
      <Package
        label={COMPONENT_LABEL}
        value={COMPONENT_VALUE}
        navigation={this.props.navigation}
      >
        {/** demo - 1 */}
        <Card
          html={COMPONENT_VALUE}
          codeHeight={1360}
          operateList={OPERATE_LIST}
          onOperate={this._onOperate}
        >
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default ImagePickerIOSPackage;
