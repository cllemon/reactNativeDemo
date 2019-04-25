import React, { Component } from 'react';
import { View, TimePickerAndroid, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = 'Android 平台 - 时间选择器的对话框';
const COMPONENT_VALUE = 'TimePickerAndroid';
const OPERATE_LIST = [
  {
    label: 'open「12h」',
    value: false
  },
  {
    label: 'open「24h」',
    value: true
  }
];

class TimePickerAndroidPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  previewDemoOne = () => {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <Text style={{ textAlign: 'center' }}>
          当前选择：{this.state.time || '--:--'}
        </Text>
      </View>
    );
  };

  _timePickerAndroid = async item => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: item.value // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
        this.setState({ time: `${hour}: ${minute}` });
      }
    } catch (error) {
      alert('Cannot open time picker');
      console.warn(error);
    }
  };

  render() {
    return (
      <Package
        label={COMPONENT_LABEL}
        value={COMPONENT_VALUE}
        navigation={this.props.navigation}
      >
        {/** demo - 1 */}
        <Card
          html={COMPONENT_VALUE}
          codeHeight={1000}
          operateList={OPERATE_LIST}
          onOperate={this._timePickerAndroid}
        >
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default TimePickerAndroidPackage;
