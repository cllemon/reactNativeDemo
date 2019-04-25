export default `
import React, { Component } from 'react';
import { View, TimePickerAndroid, Text } from 'react-native';

class TimePickerAndroidPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  previewDemoOne = () =&gt {
    return (
      &ltView style={{ flex: 1, padding: 10 }}&gt
        &ltText style={{ textAlign: 'center' }}&gt
          当前选择：{this.state.time || '--:--'}
        &lt/Text&gt
      &lt/View&gt
    );
  };

  _timePickerAndroid = async item =&gt {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: item.value // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
        this.setState({ time: hour + ': ' minute });
      }
    } catch (error) {
      alert('Cannot open time picker');
      console.warn(error);
    }
  };

  render() {
    return (
      &ltPackage
        label={COMPONENT_LABEL}
        value={COMPONENT_VALUE}
        navigation={this.props.navigation}
      &gt
        {/** demo - 1 */}
        &ltCard
          html={COMPONENT_VALUE}
          codeHeight={820}
          operateList={OPERATE_LIST}
          onOperate={this._timePickerAndroid}
        &gt
          {this.previewDemoOne()}
        &lt/Card&gt
      &lt/Package&gt
    );
  }
}

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

export default TimePickerAndroidPackage;\n`;
