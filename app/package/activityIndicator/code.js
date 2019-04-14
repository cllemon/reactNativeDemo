export default `

import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  TouchableOpacity
} from 'react-native';

const OPERATE_LIST_DEMO_ONE = [
  {
    label: 'small',
    value: 'small',
    type: 'size'
  },
  {
    label: 'large',
    value: 'large',
    type: 'size'
  },
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

  operateRender = () => {
    return (
      &ltView style={{ flexDirection: 'row' }}&gt
        {OPERATE_LIST_DEMO_ONE.map(item => {
          return &ltTouchableOpacity onPress={() => { this.onOperate(item) }} /&gt
        })}
      &lt/View&gt
    );
  };

  render() {
    return (
      &ltView&gt
        &ltView style={{ flexDirection: 'row' }}&gt
          &ltActivityIndicator
            size={this.state.size}
            color={this.state.color}
            animating={this.state.animating}
          /&gt
          &ltActivityIndicator
            size={this.state.size}
            color={this.state.color}
            animating={this.state.animating}
            style={{ marginLeft: 40, marginRight: 40 }}
          /&gt
          &ltActivityIndicator
            size={this.state.size}
            color={this.state.color}
            animating={this.state.animating}
          /&gt
        &lt/View&gt
        {this.operateRender()}
      &lt/View&gt
    );
  }
}

export default activityIndicatorPackage;
\n`;
