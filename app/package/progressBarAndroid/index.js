import React, { Component } from 'react';
import { View, ProgressBarAndroid } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = 'Android 平台 - 进度条';
const COMPONENT_VALUE = 'ProgressBarAndroid';

class ProgressBarAndroidPackage extends Component {
  previewDemoOne = () => {
    return (
      <View style={{ flexDirection: 'column' }}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between'
          }}
        >
          <ProgressBarAndroid />
          <ProgressBarAndroid styleAttr='Small' />
        </View>

        <ProgressBarAndroid
          styleAttr='Horizontal'
          style={{ width: 240, height: 60 }}
        />

        <ProgressBarAndroid
          styleAttr='Horizontal'
          style={{ width: 240, height: 60 }}
          color='#2196F3'
        />

        <ProgressBarAndroid
          styleAttr='Horizontal'
          indeterminate={false}
          progress={0.5}
          style={{ width: 240, height: 60 }}
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
        <Card html={COMPONENT_VALUE} codeHeight={560}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default ProgressBarAndroidPackage;
