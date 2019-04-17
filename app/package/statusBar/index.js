import React, { Component } from 'react';
import { Text, StatusBar } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '控制应用状态栏';
const COMPONENT_VALUE = 'StatusBar';
const OPERATE_LIST = [
  {
    label: '隐藏状态栏',
    value: 'hidden',
    type: 'setHidden',
    params: [true, 'fade']
  },
  {
    label: '显示状态栏',
    value: 'hidden',
    type: 'setHidden',
    params: [false, 'slide']
  },
  {
    label: '文本色(light)',
    value: 'BarStyle',
    type: 'setBarStyle',
    params: ['light-content', true]
  },
  {
    label: '文本色(dark)',
    value: 'BarStyle',
    type: 'setBarStyle',
    params: ['dark-content', true]
  },
  {
    label: '背景色(royalblue)',
    value: 'BackgroundColor',
    type: 'setBackgroundColor',
    params: ['#6a51ae', true]
  },
  {
    label: '背景色(default)',
    value: 'BackgroundColor',
    type: 'setBackgroundColor',
    params: ['rgba(0, 0, 0, 0.7)', true]
  },
  {
    label: '透明',
    value: 'Translucent',
    type: 'setTranslucent',
    params: [true]
  },
  {
    label: '不透明',
    value: 'Translucent',
    type: 'setTranslucent',
    params: [false]
  }
];

class StatusBarPackage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    StatusBar.setTranslucent(false);
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setHidden(false, 'slide');
  }

  previewDemoOne = () => {
    return (
      <Text style={{ textAlign: 'center' }}>
        Use static methods to change the state of the StatusBar ☝️
      </Text>
    );
  };

  onOperate = item => {
    StatusBar[item.type](...item.params);
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
          codeHeight={744}
          operateList={OPERATE_LIST}
          onOperate={this.onOperate}
        >
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default StatusBarPackage;
