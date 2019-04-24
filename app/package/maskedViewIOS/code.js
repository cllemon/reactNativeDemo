export default `
import React, { Component } from 'react';
import { View, MaskedViewIOS, Text } from 'react-native';

class MaskedViewIOSPackage extends Component {

  render() {
    return (
      &ltView style={{ flex: 1, padding: 10 }}&gt
        &ltMaskedViewIOS
          style={{ flex: 1, flexDirection: 'row', height: '100%' }}
          maskElement={
            &ltView
              style={{
                // 蒙版的效果与其本身透明度相反。先设置整个背景透明，表示完全盖住蒙版底下的元素，不显示出来。
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            &gt
              &ltText
                style={{
                  fontSize: 60,
                  // 文字不透明，表示文字部分盖住的元素会显示出来。
                  color: 'black',
                  fontWeight: 'bold'
                }}
              &gt
                Basic Mask
              &lt/Text&gt
            &lt/View&gt
          }
        &gt
          {/* 被盖在蒙版之下的元素。可以放置任意元素，例如图片等。 */}
          &ltView
            style={{ flex: 1, height: '100%', backgroundColor: '#324376' }}
          /&gt
          &ltView
            style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }}
          /&gt
          &ltView
            style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }}
          /&gt
        &lt/MaskedViewIOS&gt
      &lt/View&gt
    );
  }
}

export default MaskedViewIOSPackage;\n`;
