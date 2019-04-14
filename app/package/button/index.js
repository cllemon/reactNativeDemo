import React, { Component } from 'react';
import { Button, View } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '跨平台的按钮组件';
const COMPONENT_VALUE = 'Button';
const BUTTON_DEFAULT_LIST = [
  {
    label: '默认按钮'
  },
  {
    label: '禁用按钮',
    color: '#e6a23c',
    disabled: true
  },
  {
    label: '警告按钮',
    color: '#e6a23c'
  },
  {
    label: '危险按钮',
    color: '#f56c6c'
  }
];
const BUTTON_SIZE_LIST = [
  {
    label: '大尺寸默认按钮',
    width: 140
  },
  {
    label: '大尺寸禁用按钮',
    color: '#e6a23c',
    width: 140,
    disabled: true
  }
];

class ButtonPackage extends Component {
  onPressLearnMore = item => {
    console.log(item);
  };

  previewDemoOne = list => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {list.map(item => {
          return (
            <View
              style={{ marginLeft: 6, marginRight: 6, width: item.width }}
              key={item.label}
            >
              <Button
                onPress={() => {
                  this.onPressLearnMore(item);
                }}
                title={item.label}
                color={item.color}
                disabled={item.disabled}
              />
            </View>
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
        <Card html={[COMPONENT_VALUE, 'FIRST']} codeHeight={636}>
          {this.previewDemoOne(BUTTON_DEFAULT_LIST)}
        </Card>

        {/** demo - 2 */}
        <Card html={[COMPONENT_VALUE, 'SECOND']} codeHeight={620}>
          {this.previewDemoOne(BUTTON_SIZE_LIST)}
        </Card>
      </Package>
    );
  }
}

export default ButtonPackage;
