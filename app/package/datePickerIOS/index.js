import React, { Component } from 'react';
import { View, DatePickerIOS, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = 'iOS 平台 - 日期/时间选择器';
const COMPONENT_VALUE = 'DatePickerIOS';
const OPERATE_LIST = [
  {
    label: '步进单位(1)',
    value: 1,
    type: 'minuteInterval'
  },
  {
    label: '步进单位(10)',
    value: 10,
    type: 'minuteInterval'
  },
  {
    label: '模式(date)',
    value: 'date',
    type: 'mode'
  },
  {
    label: '模式(time)',
    value: 'time',
    type: 'mode'
  },
  {
    label: '模式(datetime)',
    value: 'datetime',
    type: 'mode'
  }
];

class DatePickerIOSPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenDate: new Date()
    };
  }

  _onDateChange = newDate => {
    this.setState({ chosenDate: newDate });
  };

  _onOperate = item => {
    this.setState({ [item.type]: item.value });
  };

  previewDemoOne = () => {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <Text>{this.state.chosenDate.toString()}</Text>
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <DatePickerIOS
            date={this.state.chosenDate}
            onDateChange={this._onDateChange}
            maximumDate={new Date()}
            minuteInterval={this.state.minuteInterval}
            mode={this.state.mode}
          />
        </View>
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
        <Card
          html={COMPONENT_VALUE}
          codeHeight={1220}
          operateList={OPERATE_LIST}
          onOperate={this._onOperate}
        >
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default DatePickerIOSPackage;
