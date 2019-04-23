import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { VALUE } from '../../common/constance';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '圆形的 loading 提示符号';
const COMPONENT_VALUE = 'ActivityIndicator';
const OPERATE_LIST_DEMO_ONE = () => {
  let list = [
    {
      label: '关闭动画',
      value: false,
      type: 'animating'
    },
    {
      label: '启用动画',
      value: true,
      type: 'animating'
    },
    {
      label: '红色',
      value: 'red',
      type: 'color'
    },
    {
      label: '蓝色',
      value: 'blue',
      type: 'color'
    }
  ];
  if (VALUE.android) {
    list = list.concat([
      {
        label: 'small',
        value: 'small',
        type: 'size'
      },
      {
        label: 'large',
        value: 'large',
        type: 'size'
      }
    ]);
  }
  return list;
};

class activityIndicatorPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 'large',
      color: '#888',
      animating: true
    };
  }

  onOperate = item => {
    this.setState({ [item.type]: item.value });
  };

  previewDemoOne = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <ActivityIndicator
          size={this.state.size}
          color={this.state.color}
          animating={this.state.animating}
        />
        <ActivityIndicator
          size={this.state.size}
          color={this.state.color}
          animating={this.state.animating}
          style={{ marginLeft: 40, marginRight: 40 }}
        />
        <ActivityIndicator
          size={this.state.size}
          color={this.state.color}
          animating={this.state.animating}
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
          html={`${COMPONENT_VALUE}`}
          operateList={OPERATE_LIST_DEMO_ONE()}
          onOperate={this.onOperate}
          codeHeight={1124}
        >
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default activityIndicatorPackage;
