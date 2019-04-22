import React, { Component } from 'react';
import { View, Text, Clipboard } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '在 iOS 和 Android 的剪贴板中读写内容';
const COMPONENT_VALUE = 'Clipboard';
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

  previewDemoOne = () => {
    return (
      <View>
        <View style={{ margin: 10 }}>
          <Text style={{ height: 120 }} selectable={true}>
            Clipboard组件可以在 iOS 和 Android 的剪贴板中读写内容。 getString()
            获取剪贴板的文本内容。返回一个Promise，然后你可以用下面的方式来读取剪贴板内容。
            setString()
            设置剪贴板的文本内容，然后你可以用下面的方式来设置剪贴板内容。
          </Text>
        </View>
        <Text style={{ margin: 10 }}>
          Current cut content:{' '}
          <Text style={{ color: 'blue' }}>{this.state.content}</Text>
        </Text>
      </View>
    );
  };

  _onOperate = async item => {
    this[item.type]();
  };

  _getString = async () => {
    try {
      const content = await Clipboard.getString();
      this.setState({ content });
    } catch (error) {
      console.log(error);
    }
  };

  _setString = () => {
    Clipboard.setString('这是你设置的剪切板内容');
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
          codeHeight={560}
          operateList={OPERATE_LIST}
          onOperate={this._onOperate}
        >
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default ClipboardPackage;
