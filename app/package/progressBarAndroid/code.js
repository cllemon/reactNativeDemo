export default `
import React, { Component } from 'react';
import { View, ProgressBarAndroid } from 'react-native';

class ProgressBarAndroidPackage extends Component {

  render() {
    return (
      &ltView style={{ flexDirection: 'column' }}&gt
        &ltView
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between'
          }}
        &gt
          &ltProgressBarAndroid /&gt
          &ltProgressBarAndroid styleAttr='Small' /&gt
        &lt/View&gt

        &ltProgressBarAndroid
          styleAttr='Horizontal'
          style={{ width: 240, height: 60 }}
        /&gt

        &ltProgressBarAndroid
          styleAttr='Horizontal'
          style={{ width: 240, height: 60 }}
          color='#2196F3'
        /&gt

        &ltProgressBarAndroid
          styleAttr='Horizontal'
          indeterminate={false}
          progress={0.5}
          style={{ width: 240, height: 60 }}
        /&gt
      &lt/View&gt
    );
  }
}

export default ProgressBarAndroidPackage;\n`;
