import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '背景图像组件';
const COMPONENT_VALUE = 'ImageBackground';
const IMAGEBACKGROUND_URL =
  'https://farm3.staticflickr.com/2811/33823326832_059359647d_k.jpg';

class ImageBackgroundPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  previewDemoOne = () => {
    return (
      <ImageBackground
        source={{ uri: IMAGEBACKGROUND_URL }}
        style={{
          width: '100%',
          height: 440,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 60, color: '#fff', fontWeight: 'bold' }}>
          Inside
        </Text>
      </ImageBackground>
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
        <Card html={[COMPONENT_VALUE, 'FIRST']} codeHeight={330}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default ImageBackgroundPackage;
