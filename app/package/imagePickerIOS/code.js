export default `
import React, { Component } from 'react';
import { View, ImagePickerIOS, Text, Image, Alert, Button } from 'react-native';

class ImagePickerIOSPackage extends Component {
  _canUseCamera = () =&gt {
    let canUse = false;
    ImagePickerIOS.canUseCamera(val =&gt {
      canUse = val;
    });
    return canUse;
  };

  _onOperate = item =&gt {
    if (item.value === 'openCameraDialog' && !this._canUseCamera()) {
      return Alert.alert(
        '提示',
        '当前设备照相机无法使用',
        [
          {
            text: '确定',
            onPress: () =&gt console.log('OK Pressed')
          }
        ],
        {
          cancelable: false
        }
      );
    }
    ImagePickerIOS[item.value](
      {},
      url =&gt {
        this.setState({ url });
        console.log(item.value + ': 选择成功');
      },
      () =&gt {
        console.log(item.value + ': 用户取消了');
      }
    );
  };

  preview = () =&gt {
    return (
      &ltView style={{ flexDirection: 'column', paddingVertical: 20 }}&gt
        &ltText&gt当前选择的图片:&lt/Text&gt
        &ltImage
          style={{ width: 300, height: 200, marginVertical: 20 }}
          source={{ uri: this.state.url }}
        /&gt
      &lt/View&gt
    );
  };

  render() {
    return  (
      &ltView&gt
        {this.preview()}
        &ltView style={{ flexDirection: 'row', flexWrap: 'wrap' }}&gt
          {OPERATE_LIST.map(item =&gt {
            return (
              &ltView style={{ margin: 10 }} key={item.value}&gt
                &ltButton
                  title={item.label}
                  onPress={() =&gt {
                    this._onOperate(item);
                  }}
                  color='#409EFF'
                /&gt
              &lt/View&gt
            );
          })}
        &lt/View&gt
      &lt/View&gt
    )
  }
}

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

export default ImagePickerIOSPackage;\n`;
