export default `
import React, { Component } from 'react';
import { View, Share, Button, Text } from 'react-native';

class SharePackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: {}
    };
  }
  onShare = async () =&gt {
    try {
      const result = await Share.share({
        title: 'reactNativeDemo',
        message:
           'React-Native-Demos 是基于 react-native 官方文档，
            把文档所列出的基础组件（简洁、易用、高效）
            和 API 实现一遍，并以演示的形式呈现出来。',
        url: 'https://github.com/cllemon/reactNativeDemo'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
      this.setState({ result });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      &ltView style={{ flex: 1, padding: 10, flexDirection: 'column' }}&gt
        &ltView style={{ paddingVertical: 30, flexDirection: 'column' }}&gt
          &ltText style={{ paddingBootom: 20 }}&gt
            action: {this.state.result.action || ' -/- '}
          &lt/Text&gt
          &ltText&gtactivityType: {this.state.result.activityType || ' -/- '}&lt/Text&gt
        &lt/View&gt
        &ltButton onPress={this.onShare} title='Share' /&gt
      &lt/View&gt
    );
  }
}

export default SharePackage;\n`;
