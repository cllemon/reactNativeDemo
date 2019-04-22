import React, { Component } from 'react';
import { View, DatePickerAndroid, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '日期选择器的对话框';
const COMPONENT_VALUE = 'DatePickerAndroid';
const OPERATE_LIST = [
  {
    label: 'calendar',
    value: {
      mode: 'calendar'
    },
    type: 'calendar'
  },
  {
    label: 'spinner',
    value: {
      mode: 'spinner'
    },
    type: 'spinner'
  },
  {
    label: 'max/min',
    value: {
      minDate: new Date(),
      maxDate: new Date('2019-10-01')
    },
    type: 'value'
  }
];

class DatePickerAndroidPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDatePicker = async (options = {}) => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open(
        Object.assign(
          {
            date: new Date()
          },
          options
        )
      );
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ year, month, day });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  _onOperate = item => {
    this.onDatePicker(item.value);
  };

  previewDemoOne = () => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: 'blue', fontSize: 18 }}>
          {this.state.year || '-:-'} 年{' '}
        </Text>
        <Text style={{ color: 'blue', fontSize: 18 }}>
          {this.state.month + 1 || '-:-'} 月{' '}
        </Text>
        <Text style={{ color: 'blue', fontSize: 18 }}>
          {this.state.day || '-:-'} 日{' '}
        </Text>
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
          codeHeight={1080}
          operateList={OPERATE_LIST}
          onOperate={this._onOperate}
        >
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default DatePickerAndroidPackage;
