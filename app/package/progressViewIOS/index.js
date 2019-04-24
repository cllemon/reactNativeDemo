import React, { Component } from 'react';
import { View, ProgressViewIOS } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = 'iOS 平台 - 进度条';
const COMPONENT_VALUE = 'ProgressViewIOS';

class ProgressViewIOSPackage extends Component {
  previewDemoOne = () => {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <ProgressViewIOS progress={0.8} style={{ marginVertical: 20 }} />

        <ProgressViewIOS
          progress={0.7}
          trackTintColor='#6b6'
          style={{ marginVertical: 20 }}
        />

        <ProgressViewIOS
          progress={0.5}
          progressTintColor='#000'
          style={{ marginVertical: 20 }}
        />

        <ProgressViewIOS
          progress={0.3}
          progressViewStyle='bar'
          style={{ marginVertical: 20 }}
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
        <Card html={COMPONENT_VALUE} codeHeight={520}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default ProgressViewIOSPackage;
