export default `
import React, { Component } from 'react';
import { View, Alert, Button } from 'react-native';

class AlertPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onAlertOperate = item =&gt {
    Alert.alert(COMPONENT_VALUE, COMPONENT_LABEL, item.value, {
      cancelable: false
    });
  };

  render() {
    return (
      &ltView style={{ flexDirection: 'row', flexWrap: 'wrap' }}&gt
        {ALert_LIST.map((item, index) =&gt {
          return (
            &ltView style={{ marginRight: 26 }} key={index}&gt
              &ltButton
                onPress={() =&gt {
                  this.onAlertOperate(item);
                }}
                title={item.label}
              /&gt
            &lt/View&gt
          );
        })}
      &lt/View&gt
    );
  }
}

const ALert_LIST = [
  {
    label: '消息提示',
    value: [
      {
        text: '确定',
        onPress: () =&gt console.log('OK Pressed')
      }
    ]
  },
  {
    label: '确认消息',
    value: [
      {
        text: '取消',
        onPress: () =&gt console.log('Cancel Pressed'),
        style: 'cancel'
      },
      { text: '确定', onPress: () =&gt console.log('OK Pressed') }
    ]
  },
  {
    label: '自定义',
    value: [
      {
        text: '稍后再说',
        onPress: () =&gt console.log('Ask me later pressed')
      },
      {
        text: '取消',
        onPress: () =&gt console.log('Cancel Pressed'),
        style: 'cancel'
      },
      { text: '确定', onPress: () =&gt console.log('OK Pressed') }
    ]
  }
];

export default AlertPackage;\n`;
