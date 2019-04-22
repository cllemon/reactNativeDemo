export default `
import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';

const { height, width } = Dimensions.get('window');

class DimensionsPackage extends Component {

  previewDemoOne = () =&gt {
    return (

    );
  };

  render() {
    return (
      &ltView style={{ flexDirection: 'column', padding: 20 }}&gt
        &ltText&gt当前手机尺寸：&lt/Text&gt
        &ltText style={{ color: 'blue', margin: 10 }}&gtheight: {height}&lt/Text&gt
        &ltText style={{ color: 'blue', margin: 10 }}&gtwidth: {width}&lt/Text&gt
        &ltText&gt
          注：React Native
          中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。
        &lt/Text&gt
      &lt/View&gt
    );
  }
}

export default DimensionsPackage;\n`;
