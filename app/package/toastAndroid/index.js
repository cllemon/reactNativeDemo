import React, { Component } from 'react';
import { View, ToastAndroid, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = 'Android 平台 - 设备上显示一个悬浮的提示信息';
const COMPONENT_VALUE = 'ToastAndroid';
const OPERATE_LIST = [
  {
    label: 'TOP',
    value: 'TOP',
    type: 'position'
  },
  {
    label: 'BOTTOM',
    value: 'BOTTOM',
    type: 'position'
  },
  {
    label: 'CENTER',
    value: 'CENTER',
    type: 'position'
  },
  {
    label: 'SHORT',
    value: 'SHORT',
    type: 'time'
  },
  {
    label: 'LONG',
    value: 'LONG',
    type: 'time'
  }
];
const Toast = props => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid[props.time],
      ToastAndroid[props.position],
      10,
      50
    );
    return null;
  }
  return null;
};

class ToastAndroidPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      time: 'SHORT',
      position: 'CENTER'
    };
  }

  _onOperate = item => {
    this.setState({
      [item.type]: item.value,
      visible: true
    });
  };

  previewDemoOne = () => {
    const { visible, position, time } = this.state;
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text> Let's try it out ⤵️</Text>
        <Toast
          style={{ color: 'red' }}
          visible={visible}
          message='A wild toast appeared!'
          position={position}
          time={time}
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
          codeHeight={1140}
          operateList={OPERATE_LIST}
          onOperate={this._onOperate}
        >
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default ToastAndroidPackage;
