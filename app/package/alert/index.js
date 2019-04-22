import React, { Component } from 'react';
import { View, Alert, Button } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '提示对话框 & AlertIOS';
const COMPONENT_VALUE = 'Alert';
const ALert_LIST = [
  {
    label: '消息提示',
    value: [
      {
        text: '确定',
        onPress: () => console.log('OK Pressed')
      }
    ]
  },
  {
    label: '确认消息',
    value: [
      {
        text: '取消',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      { text: '确定', onPress: () => console.log('OK Pressed') }
    ]
  },
  {
    label: '自定义',
    value: [
      {
        text: '稍后再说',
        onPress: () => console.log('Ask me later pressed')
      },
      {
        text: '取消',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      { text: '确定', onPress: () => console.log('OK Pressed') }
    ]
  }
];

class AlertPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onAlertOperate = item => {
    Alert.alert(COMPONENT_VALUE, COMPONENT_LABEL, item.value, {
      cancelable: false
    });
  };

  previewDemoOne = () => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {ALert_LIST.map((item, index) => {
          return (
            <View style={{ marginRight: 26 }} key={index}>
              <Button
                onPress={() => {
                  this.onAlertOperate(item);
                }}
                title={item.label}
              />
            </View>
          );
        })}
      </View>
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
        <Card html={COMPONENT_VALUE} codeHeight={908}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default AlertPackage;
