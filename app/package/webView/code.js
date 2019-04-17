export default `

  /*  Warning Please use the react-native-community/react-native-webview
      fork of this component instead
   */

  import React, { Component } from 'react';
  import { View, WebView, Button } from 'react-native';

  const OPERATE_LIST = [
    {
      label: 'RN Community',
      value: 'https://github.com/react-native-community'
    },
    {
      label: 'React-Native',
      value: 'https://github.com/facebook/react-native'
    },
    {
      label: 'Ant Design',
      value: 'https://ant.design/docs/react/introduce-cn'
    },
    {
      label: 'React',
      value: 'https://reactjs.org/'
    },
    {
      label: 'ElementUI',
      value: 'http://element-cn.eleme.io/#/zh-CN/guide/design'
    },
    {
      label: 'Reactnavigation',
      value: 'https://reactnavigation.org/'
    }
  ];

  class WebViewPackage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        url: 'https://reactjs.org/'
      };
    }

    onOperate = item =&gt {
      this.setState({ url: item.value });
    };

    render() {
      return (
        &ltView&gt
          &ltView style={{ width: 400, height: 440 }}&gt
            &ltWebView
              ref='WebView'
              startInLoadingState={true}
              automaticallyAdjustContentInsets={true}
              source={{ uri: this.state.url }}
            /&gt
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

  export default WebViewPackage;\n`;
