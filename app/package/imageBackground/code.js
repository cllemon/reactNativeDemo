export default {
  FIRST: `
  import React, { Component } from 'react';
  import { View, ImageBackground } from 'react-native';

  class ImageBackgroundPackage extends Component {

    render() {
      return (
        &ltImageBackground
          source={IMAGEBACKGROUND_URL}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        &gt
          &ltText&gtInside&lt/Text&gt
        &lt/ImageBackground&gt
      );
    };
  }

  const IMAGEBACKGROUND_URL =
    'https://farm3.staticflickr.com/2811/33823326832_059359647d_k.jpg';

  export default ImageBackgroundPackage;\n`
};
