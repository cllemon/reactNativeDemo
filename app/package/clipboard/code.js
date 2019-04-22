export default `
  import React, { Component } from 'react';
  import { View, Text, Clipboard } from 'react-native';

  const OPERATE_LIST = [
    {
      label: '获取剪贴板内容',
      value: '_getString',
      type: '_getString'
    },
    {
      label: '设置剪贴板内容',
      value: '_setString',
      type: '_setString'
    }
  ];

  class ClipboardPackage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        content: ''
      };
    }

    _onOperate = async item =&gt {
      this[item.type]();
    };

    _getString = async () =&gt {
      try {
        const content = await Clipboard.getString();
        this.setState({ content });
      } catch (error) {
        console.log(error);
      }
    };

    _setString = () =&gt {
      Clipboard.setString('这是你设置的剪切板内容');
    };

    render() {
      return (
        &ltView&gt
          &ltView style={{ margin: 10 }}&gt
            &ltText style={{ height: 120 }} selectable={true}&gt
              Clipboard组件可以在 iOS 和 Android 的剪贴板中读写内容。 getString()
              获取剪贴板的文本内容。返回一个Promise，然后你可以用下面的方式来读取剪贴板内容。
              setString()
              设置剪贴板的文本内容，然后你可以用下面的方式来设置剪贴板内容。
            &lt/Text&gt
          &lt/View&gt
          &ltText style={{ margin: 10 }}&gt
            Current cut content:{' '}
            &ltText style={{ color: 'blue' }}&gt{this.state.content}&lt/Text&gt
          &lt/Text&gt

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

  export default ClipboardPackage;\n`;
