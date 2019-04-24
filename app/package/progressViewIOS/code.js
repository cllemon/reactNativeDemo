export default `
import React, { Component } from 'react';
import { View, ProgressViewIOS } from 'react-native';

class ProgressViewIOSPackage extends Component {

  render() {
    return (
      &ltView style={{ flex: 1, padding: 10 }}&gt
        &ltProgressViewIOS progress={0.8} style={{ marginVertical: 20 }} /&gt

        &ltProgressViewIOS
          progress={0.7}
          trackTintColor='#6b6'
          style={{ marginVertical: 20 }}
        /&gt

        &ltProgressViewIOS
          progress={0.5}
          progressTintColor='#000'
          style={{ marginVertical: 20 }}
        /&gt

        &ltProgressViewIOS
          progress={0.3}
          progressViewStyle='bar'
          style={{ marginVertical: 20 }}
        /&gt
      &lt/View&gt
    );
  }
}

export default ProgressViewIOSPackage;\n`;
