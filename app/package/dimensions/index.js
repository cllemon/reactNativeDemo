import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '获取设备屏幕的宽高';
const COMPONENT_VALUE = 'Dimensions';
const { height, width } = Dimensions.get('window');

class DimensionsPackage extends Component {
  previewDemoOne = () => {
    return (
      <View style={{ flexDirection: 'column', padding: 20 }}>
        <Text>当前手机尺寸：</Text>
        <Text style={{ color: 'blue', margin: 10 }}>height: {height}</Text>
        <Text style={{ color: 'blue', margin: 10 }}>width: {width}</Text>
        <Text>
          注：React Native
          中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。
        </Text>
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
        <Card html={COMPONENT_VALUE} codeHeight={370}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default DimensionsPackage;
