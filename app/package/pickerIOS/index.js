import React, { Component } from 'react';
import { View, PickerIOS, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = 'iOS 平台 - 选择器';
const COMPONENT_VALUE = 'PickerIOS';
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

class PickerIOSPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'TypeScript'
    };
  }

  _onValueChange = language => {
    this.setState({ language });
  };

  previewDemoOne = () => {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <PickerIOS
          selectedValue={this.state.language}
          onValueChange={this._onValueChange}
        >
          {PICKER_LIST.map((item, index) => {
            return (
              <PickerIOS.Item
                label={item.label}
                value={item.value}
                key={index}
              />
            );
          })}
        </PickerIOS>
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
        <Card html={COMPONENT_VALUE} codeHeight={1000}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default PickerIOSPackage;
