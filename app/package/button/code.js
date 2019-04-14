export default {
  FIRST: `import React, { Component } from 'react';
  import { Text, View, StyleSheet } from 'react-native';
  const BUTTON_DEFAULT_LIST = [
    {
      label: '默认按钮'
    },
    {
      label: '禁用按钮',
      color: '#e6a23c',
      disabled: true
    },
    {
      label: '警告按钮',
      color: '#e6a23c'
    },
    {
      label: '危险按钮',
      color: '#f56c6c'
    }
  ];

  class Button extends Component {

    onPressLearnMore(item) {
      console.log(item)
    }

    render() {
      return (
        &ltView style={{ flexDirection: 'row' }}&gt
          {BUTTON_DEFAULT_LIST.map(item =&gt {
            return (
              &ltView
                style={{ marginLeft: 6, marginRight: 6 }}
                key={item.label}
              &gt
                &ltButton
                  onPress={() =&gt {
                    this.onPressLearnMore(item);
                  }}
                  title={item.label}
                  color={item.color}
                  disabled={item.disabled}
                /&gt
              &lt/View&gt
            );
          })}
        &lt/View&gt
      );
    }
  }

  export default Button;\n`,
  SECOND: `import React, { Component } from 'react';
  import { Text, View, StyleSheet } from 'react-native';
  const BUTTON_SIZE_LIST = [
    {
      label: '大尺寸默认按钮',
      width: 140
    },
    {
      label: '大尺寸禁用按钮',
      color: '#e6a23c',
      width: 140,
      disabled: true
    }
  ];


  class Button extends Component {

    onPressLearnMore(item) {
      console.log(item)
    }

    render() {
      return (
        &ltView style={{ flexDirection: 'row' }}&gt
          {BUTTON_SIZE_LIST.map(item =&gt {
            return (
              &ltView
                style={{
                  marginLeft: 6,
                  marginRight: 6,
                  width: item.width
                }}
                key={item.label}
              &gt
                &ltButton
                  onPress={() =&gt {
                    this.onPressLearnMore(item);
                  }}
                  title={item.label}
                  color={item.color}
                  disabled={item.disabled}
                /&gt
              &lt/View&gt
            );
          })}
        &lt/View&gt
      );
    }
  }

  export default Button;\n`
};
