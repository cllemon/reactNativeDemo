export default `
  import React, { Component } from 'react';
  import { Text, StatusBar, View, Button } from 'react-native';

  class StatusBarPackage extends Component {
    onOperate = item =&gt {
      StatusBar[item.type](...item.params);
    };

    render() {
      return (
        &ltView&gt
          &ltText style={{ textAlign: 'center', marginBottom: 30 }}&gt
            Use static methods to change the state of the statusBar
          &lt/Text&gt
          &ltView style={{ flexDirection: 'row', flexWrap: 'wrap' }}&gt
            {OPERATE_LIST.map((item, index) =&gt {
              return (
                &ltView style={{ margin: 10 }} key={index}&gt
                  &ltButton
                    title={item.label}
                    onPress={() =&gt {
                      this.onOperate(item);
                    }}
                    color='#409EFF'
                  /&gt
                &lt/View&gt
              );
            })}
          &lt/View&gt
        &lt/View&gt
      );
    }
  }

  const OPERATE_LIST = [
    {
      label: '隐藏状态栏',
      value: 'hidden',
      type: 'setHidden',
      params: [true, 'fade']
    },
    {
      label: '显示状态栏',
      value: 'hidden',
      type: 'setHidden',
      params: [false, 'slide']
    },
    {
      label: '文本色(light)',
      value: 'BarStyle',
      type: 'setBarStyle',
      params: ['light-content', true]
    },
    {
      label: '文本色(dark)',
      value: 'BarStyle',
      type: 'setBarStyle',
      params: ['dark-content', true]
    },
    {
      label: '背景色(royalblue)',
      value: 'BackgroundColor',
      type: 'setBackgroundColor',
      params: ['#6a51ae', true]
    },
    {
      label: '背景色(default)',
      value: 'BackgroundColor',
      type: 'setBackgroundColor',
      params: ['rgba(0, 0, 0, 0.7)', true]
    },
    {
      label: '透明',
      value: 'Translucent',
      type: 'setTranslucent',
      params: [true]
    },
    {
      label: '不透明',
      value: 'Translucent',
      type: 'setTranslucent',
      params: [false]
    }
  ];

  export default StatusBarPackage;\n`;
