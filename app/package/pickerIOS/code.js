export default `
import React, { Component } from 'react';
import { View, PickerIOS } from 'react-native';

class PickerIOSPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'TypeScript'
    };
  }

  _onValueChange = language =&gt {
    this.setState({ language });
  };

  render() {
    return (
      &ltView style={{ flex: 1, padding: 10 }}&gt
        &ltPickerIOS
          selectedValue={this.state.language}
          onValueChange={this._onValueChange}
        &gt
          {PICKER_LIST.map((item, index) =&gt {
            return (
              &ltPickerIOS.Item
                label={item.label}
                value={item.value}
                key={index}
              /&gt
            );
          })}
        &lt/PickerIOS&gt
      &lt/View&gt
    );
  }
}

const PICKER_LIST = [
  {
    label: 'Java',
    value: 'Java'
  },
  {
    label: 'JavaScript',
    value: 'JavaScript'
  },
  {
    label: 'TypeScript',
    value: 'TypeScript'
  },
  {
    label: 'node.js',
    value: 'node.js'
  },
  {
    label: 'go',
    value: 'go'
  },
  {
    label: 'Python',
    value: 'Python'
  }
];

export default PickerIOSPackage;\n`;
