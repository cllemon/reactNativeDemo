export default {
  FIRST: `
  import React, { Component } from 'react';
  import { View, Image } from 'react-native';

  class ImagePackage extends Component {

    render() {
      return (
        &ltView
          style={{ flexDirection: 'row', justifyContent: 'center', padding: 30 }}
        &gt
          {BASIC_LIST.map((item, index) =&gt {
            return (
              &ltImage
                style={[{ marginRight: 15 }, item.style]}
                key={index}
                source={{ uri: REACT_ICON_URL }}
              /&gt
            );
          })}
        &lt/View&gt
      );
    };
  }

  const REACT_ICON_URL =
    'https://facebook.github.io/react-native/docs/assets/favicon.png';

  const BASIC_LIST = [
    {
      style: { width: 100, height: 100 }
    },
    {
      style: { width: 75, height: 75 }
    },
    {
      style: { width: 50, height: 50 }
    },
    {
      style: { width: 25, height: 25 }
    },
    {
      style: { width: 15, height: 15 }
    }
  ];

  export default ImagePackage;\n`
};
