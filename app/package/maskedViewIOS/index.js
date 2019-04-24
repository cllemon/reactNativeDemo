import React, { Component } from 'react';
import { View, MaskedViewIOS, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = 'iOS 平台 - 渲染一个带蒙版的视图';
const COMPONENT_VALUE = 'MaskedViewIOS';

class MaskedViewIOSPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  previewDemoOne = () => {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <MaskedViewIOS
          style={{ flex: 1, flexDirection: 'row', height: '100%' }}
          maskElement={
            <View
              style={{
                // 蒙版的效果与其本身透明度相反。先设置整个背景透明，表示完全盖住蒙版底下的元素，不显示出来。
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 60,
                  // 文字不透明，表示文字部分盖住的元素会显示出来。
                  color: 'black',
                  fontWeight: 'bold'
                }}
              >
                Basic Mask
              </Text>
            </View>
          }
        >
          {/* 被盖在蒙版之下的元素。可以放置任意元素，例如图片等。 */}
          <View
            style={{ flex: 1, height: '100%', backgroundColor: '#324376' }}
          />
          <View
            style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }}
          />
          <View
            style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }}
          />
        </MaskedViewIOS>
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

export default MaskedViewIOSPackage;
