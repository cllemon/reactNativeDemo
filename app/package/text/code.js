export default {
  FIRST: `
  import React, { Component } from 'react';
  import { View, Text } from 'react-native';

  class TextPackage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        ellipsizeMode: 'tail',
        selectable: false
      };
    }

    onOperate = item =&gt {
      this.setState({ [item.type]: item.value });
    };

    render() {
      return (
        &ltView
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            minHeight: 200,
            marginTop: 20
          }}
        &gt
          {list.map((item, index) =&gt {
            return (
              &ltText
                key={index}
                numberOfLines={1}
                ellipsizeMode={this.state.ellipsizeMode}
                selectable={this.state.selectable}
                style={[
                  {
                    fontWeight: 'bold',
                    textAlign: 'left',
                    paddingBottom: 20
                  },
                  item.style
                ]}
              &gt
                {item.label}
              &lt/Text&gt
            );
          })}
           &ltView style={{ flexDirection: 'row', flexWrap: 'wrap' }}&gt
            {TEXT_OPERATE_LIST.map(item =&gt {
              return (
                &ltView style={{ margin: 10 }} key={item.value}&gt
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

  const TEXT_FIRST_LIST = [
    {
      label: 'Text USES a Text layout without flexbox',
      style: {
        fontSize: 20,
        color: '#409EFF'
      }
    },
    {
      label: 'Text USES a Text layout without flexbox',
      style: {
        fontSize: 18,
        color: '#67C23A',
        textDecorationLine: 'underline'
      }
    },
    {
      label: 'Text USES a Text layout without flexbox',
      style: {
        fontSize: 16,
        color: '#E6A23C',
        textDecorationLine: 'line-through'
      }
    },
    {
      label: 'Text USES a Text layout without flexbox',
      style: {
        fontSize: 14,
        color: '#F56C6C'
      }
    },
    {
      label: 'Text USES a Text layout without flexbox',
      style: {
        fontSize: 12,
        color: '#909399'
      }
    },
    {
      label:
        'A React component for displaying text, and it also supports nesting, styling, and touch processing',
      style: {
        fontSize: 16,
        color: '#909399',
        padding: 20
      }
    }
  ];

  const TEXT_OPERATE_LIST = [
    {
      label: '开启长按选择',
      value: true,
      type: 'selectable'
    },
    {
      label: '禁用长按选择',
      value: false,
      type: 'selectable'
    },
    {
      label: '溢出符( tail )',
      value: 'tail',
      type: 'ellipsizeMode'
    },
    {
      label: '溢出符( middle )',
      value: 'middle',
      type: 'ellipsizeMode'
    },
    {
      label: '溢出符( head )',
      value: 'head',
      type: 'ellipsizeMode'
    },
    {
      label: '溢出符( clip )',
      value: 'clip',
      type: 'ellipsizeMode'
    }
  ];

  export default TextPackage;\n`,
  SECOND: ``
};
