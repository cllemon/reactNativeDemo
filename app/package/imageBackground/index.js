import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '背景图像组件';
const COMPONENT_VALUE = 'ImageBackground';

class ImageBackgroundPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  previewDemoOne = () => {
    return <View />;
  };

  render() {
    return (
      <Package
        label={COMPONENT_LABEL}
        value={COMPONENT_VALUE}
        navigation={this.props.navigation}
      >
        {/** demo - 1 */}
        <Card html={[COMPONENT_VALUE, 'FIRST']} codeHeight={2044}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default ImageBackgroundPackage;
