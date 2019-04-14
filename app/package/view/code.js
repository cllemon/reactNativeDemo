export default {
  FIRST: `
  import React, { Component } from 'react';
  import { View, Text } from 'react-native';

  class ViewPackage extends Component {

    render() {
      return (
        &ltView
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            minHeight: 200,
            alignItems: 'center'
          }}
        &gt
          {VIEW_FIRST_LIST.map((item, index) =&gt {
            return (
              &ltView style={[{
                width: 160,
                height: 110,
                elevation: 4,
              }, item.viewStyle]} key={index}&gt
                &ltText style={[{
                  fontSize: 12,
                  fontWeight: 'bold',
                  padding: 20
                }, item.textStyle]}&gt{item.label}&lt/Text&gt
              &lt/View&gt
            );
          })}
        &lt/View&gt
      );
    }
  }

  const VIEW_FIRST_LIST = [
    {
      label: '一个支持Flexbox布局样式，一些触摸处理和一些无障碍功能的容器\n',
      viewStyle: {
        backgroundColor: '#409EFF',
        borderRadius: 10,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textStyle: {
        color: '#fff',
      }
    },
    {
      label: '一个支持Flexbox布局样式，一些触摸处理和一些无障碍功能的容器\n',
      viewStyle: {
        marginRight: 20,
        borderColor: '#eee',
        borderWidth: 2,
      },
      textStyle: {}
    }
  ];

  export default ViewPackage;
  \n`,
  SECOND: `
  import React, { Component } from 'react';
  import { View, Text } from 'react-native';

  class ViewPackage extends Component {
    render() {
      return (
        &ltView
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            minHeight: 200,
            alignItems: 'center'
          }}
        &gt
          {VIEW_SECOND_LIST.map((item, index) =&gt {
            return (
              &ltView style={item.viewStyle} key={index}&gt
                &ltText style={item.textStyle}&gt{item.label}&lt/Text&gt
                {item.children && item.children()}
              &lt/View&gt
            );
          })}
        &lt/View&gt
      );
    }
  }

  const VIEW_SECOND_LIST = [
    {
      label: '',
      viewStyle: {
        width: 205,
        height: 160,
        borderColor: '#409EFF',
        borderWidth: 2,
        borderRadius: 10,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
      },
      children: () =&gt {
        return (
          &ltView
            style={{
              backgroundColor: 'gray',
              width: 150,
              height: 102,
              elevation: 10,
              marginBottom: 18,
              padding: 10,
              borderRadius: 4
            }}
          &gt
            &ltText
              style={{
                color: '#fff',
                fontWeight: 'bold',
                marginBottom: 10,
                height: 80
              }}
            &gt
              它可以放到其它的视图里，也可以有任意多个任意类型的子视图
            &lt/Text&gt
          &lt/View&gt
        );
      }
    }
  ];

  export default ViewPackage;
  \n`
};
