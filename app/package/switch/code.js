export default `
  import React, { Component } from 'react';
  import { View, Switch } from 'react-native';

  const SWITCH_LIST = [
    {
      type: 'fourValue'
    },
    {
      type: 'oneValue',
      disabled: true
    },
    {
      type: 'secondValue',
      thumbColor: '#fff',
      trackColor: { true: '#67C23A', false: '#dcdfe6' }
    },
    {
      type: 'thirdValue',
      thumbColor: '#fff',
      trackColor: { true: '#409eff', false: '#dcdfe6' }
    }
  ];

  class SwitchPackage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        thirdValue: true
      };
    }

    render() {
      return (
        &ltView style={{ flexDirection: 'row' }}&gt
          {SWITCH_LIST.map((item, index) =&gt {
            return (
              &ltSwitch
                key={index}
                style={{ padding: 20 }}
                value={this.state[item.type]}
                disabled={item.disabled}
                trackColor={item.trackColor}
                thumbColor={item.thumbColor}
                onValueChange={value =&gt {
                  this.setState({ [item.type]: value });
                }}
              /&gt
            );
          })}
        &lt/View&gt
      );
    }
  }

  export default SwitchPackage;\n`;
