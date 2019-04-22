export default `
import React, { Component } from 'react';
import { View, ToastAndroid, Text, Button } from 'react-native';

class ToastAndroidPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      time: 'SHORT',
      position: 'CENTER'
    };
  }

  _onOperate = item =&gt {
    this.setState({
      [item.type]: item.value,
      visible: true
    });
  };

  render() {
    const { visible, position, time } = this.state;
    return (
      &ltView
        style={{ flexDirection: 'row', justifyContent: 'center', padding: 30 }}
      &gt
        &ltText&gt ToastAndroid ⤵️&lt/Text&gt
        &ltToast
          style={{ color: 'red' }}
          visible={visible}
          message='A wild toast appeared!'
          position={position}
          time={time}
        /&gt
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
    label: 'TOP',
    value: 'TOP',
    type: 'position'
  },
  {
    label: 'BOTTOM',
    value: 'BOTTOM',
    type: 'position'
  },
  {
    label: 'CENTER',
    value: 'CENTER',
    type: 'position'
  },
  {
    label: 'SHORT',
    value: 'SHORT',
    type: 'time'
  },
  {
    label: 'LONG',
    value: 'LONG',
    type: 'time'
  }
];

const Toast = props =&gt {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid[props.time],
      ToastAndroid[props.position],
      0,
      0
    );
    return null;
  }
  return null;
};

export default ToastAndroidPackage;\n`;
