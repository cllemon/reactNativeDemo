import React, { Component } from 'react';
import { View, Switch } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '跨平台通用的“开关”';
const COMPONENT_VALUE = 'Switch';
const SWITCH_LIST = [
  {
    type: 'oneValue',
    disabled: true
  },
  {
    type: 'secondValue',
    thumbColor: '#fff',
    trackColor: { true: '#67C23A', false: '#dcdfe6' }
  },
  {
    type: 'thirdValue',
    thumbColor: '#fff',
    trackColor: { true: '#409eff', false: '#dcdfe6' }
  },
  {
    type: 'fourValue'
  }
];

class SwitchPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thirdValue: true
    };
  }

  previewDemoOne = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {SWITCH_LIST.map((item, index) => {
          return (
            <Switch
              key={index}
              style={{ padding: 20 }}
              value={
                this.state[
                  item.type
                ] /** 表示此开关是否打开。默认为false（关闭状态 */
              }
              disabled={item.disabled}
              trackColor={item.trackColor /**开启状态时的背景颜色。 */}
              thumbColor={
                item.thumbColor /**开关上圆形按钮的背景颜色。在iOS上设置此颜色会丢失按钮的投影。 */
              }
              onValueChange={value => {
                this.setState({ [item.type]: value });
              }}
            />
          );
        })}
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
        <Card html={COMPONENT_VALUE} codeHeight={670}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default SwitchPackage;
