import React, { Component } from 'react';
import { View, Share, Button, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '分享';
const COMPONENT_VALUE = 'Share';

class SharePackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: {}
    };
  }
  onShare = async () => {
    try {
      const result = await Share.share({
        title: 'reactNativeDemo',
        message:
          'React-Native-Demos 是基于 react-native 官方文档，把文档所列出的基础组件（简洁、易用、高效） 和 API 实现一遍，并以演示的形式呈现出来。',
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
      console.log(result);
      this.setState({ result });
    } catch (error) {
      alert(error.message);
    }
  };

  previewDemoOne = () => {
    return (
      <View style={{ flex: 1, padding: 10, flexDirection: 'column' }}>
        <View style={{ paddingVertical: 30, flexDirection: 'column' }}>
          <Text style={{ paddingBottom: 20 }}>
            action: {this.state.result.action || ' -/- '}
          </Text>
          <Text>activityType: {this.state.result.activityType || ' -/- '}</Text>
        </View>
        <Button onPress={this.onShare} title='Share' />
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
        <Card html={COMPONENT_VALUE} codeHeight={820}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default SharePackage;
