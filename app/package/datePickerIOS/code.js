export default `
import React, { Component } from 'react';
import { View, DatePickerIOS, Text } from 'react-native';

class DatePickerIOSPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenDate: new Date()
    };
  }

  _onDateChange = newDate =&gt {
    this.setState({ chosenDate: newDate });
  };

  _onOperate = item =&gt {
    this.setState({ [item.type]: item.value });
  };

  render() {
    return (
      &ltView style={{ flex: 1, padding: 10 }}&gt
        &ltText&gt{this.state.chosenDate.toString()}&lt/Text&gt
        &ltView style={{ justifyContent: 'center', flex: 1 }}&gt
          &ltDatePickerIOS
            date={this.state.chosenDate}
            onDateChange={this._onDateChange}
            maximumDate={new Date()}
            minuteInterval={this.state.minuteInterval}
            mode={this.state.mode}
          /&gt
        &lt/View&gt
        &ltView style={{ flexDirection: 'row', flexWrap: 'wrap' }}&gt
            {OPERATE_LIST.map((item, index) =&gt {
              return (
                &ltView style={{ margin: 10 }} key={index}&gt
                  &ltButton
                      title={item.label}
                      onPress={() =&gt {
                      this._onOperate(item);
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

export default DatePickerIOSPackage;\n`;
