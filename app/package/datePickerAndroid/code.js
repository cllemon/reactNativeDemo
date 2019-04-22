export default `
import React, { Component } from 'react';
import { View, DatePickerAndroid, Text } from 'react-native';

class DatePickerAndroidPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDatePicker = async (options = {}) =&gt {
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

  onOperate = item =&gt {
    this.onDatePicker(item.value);
  };

  render() {
    return (
      &ltView&gt
        &ltView style={{ flexDirection: 'row', alignItems: 'center' }}&gt
          &ltText style={{ color: 'blue', fontSize: 18 }}&gt
            {this.state.year || '-:-'} 年{' '}
          &lt/Text&gt
          &ltText style={{ color: 'blue', fontSize: 18 }}&gt
            {this.state.month + 1 || '-:-'} 月{' '}
          &lt/Text&gt
          &ltText style={{ color: 'blue', fontSize: 18 }}&gt
            {this.state.day || '-:-'} 日{' '}
          &lt/Text&gt
        &lt/View&gt
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

export default DatePickerAndroidPackage;\n`;
