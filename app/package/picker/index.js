import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '原生选择器';
const COMPONENT_VALUE = 'Picker';

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
  }
];

const OPERATE_LIST = [
  {
    label: '禁用',
    value: false,
    type: 'enabled'
  }
];
class PickerPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languagev: '',
      enabled: true,
      mode: 'dropdown',
      prompt: 'title'
    };
  }

  onOperate = item => {
    this.setState({ [item.type]: !this.state[item.type] });
  };

  onValueChange = (value, index) => {
    console.log(value, index);
  };

  previewDemoOne = () => {
    return (
      <View
        style={{
          height: 50,
          width: 300,
          borderColor: this.state.enabled ? '#409EFF' : '#999',
          borderWidth: 1,
          borderRadius: 4
        }}
      >
        <Picker
          selectedValue={this.state.language}
          enabled={this.state.enabled}
          mode='dialog'
          prompt={this.state.prompt}
          style={{ height: 40, width: 300, marginTop: 4, paddingTop: 10 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          {PICKER_LIST.map((item, index) => {
            return (
              <Picker.Item label={item.label} value={item.value} key={index} />
            );
          })}
        </Picker>
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
          codeHeight={36}
          operateList={OPERATE_LIST}
          onOperate={this.onOperate}
        >
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default PickerPackage;
