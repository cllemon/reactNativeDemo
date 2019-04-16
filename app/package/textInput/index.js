import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '文本输入框';
const COMPONENT_VALUE = 'TextInput';
const SELECTIONCOLOR = '#409EFF';
const PLACEHOLDERTEXTCOLOR = '#999';
const PLACEHOLDER = '请输入...';
OPERATE_LIST_DEMO_ONE = [
  {
    label: '隐藏光标',
    value: 'caretHidden',
    type: 'caretHidden'
  },
  {
    label: '密码框',
    value: 'secureTextEntry',
    type: 'secureTextEntry'
  },
  {
    label: '禁用',
    value: 'editables',
    type: 'editable'
  }
];
OPERATE_LIST_DEMO_SECOND = [
  {
    label: '数字键盘',
    value: 'numeric',
    type: 'keyboardType'
  },
  {
    label: 'number-pad',
    value: 'number-pad',
    type: 'keyboardType'
  },
  {
    label: 'email-address',
    value: 'email-address',
    type: 'keyboardType'
  },
  {
    label: 'phone-pad',
    value: 'phone-pad',
    type: 'keyboardType'
  },
  {
    label: '键色 - light',
    value: 'light',
    type: 'keyboardAppearance'
  },
  {
    label: '键色 - dark',
    value: 'dark',
    type: 'keyboardAppearance'
  }
];

class TextInputPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text_first: '',
      text_second: '',
      editable: true,
      caretHidden: false,
      multiline: false,
      secureTextEntry: false,
      keyboardAppearance: 'default',
      keyboardType: 'default',
      inlineImageLeft: 'search_icon',
      enablesReturnKeyAutomatically: false,
      maxLength: 200,
      numberOfLines: 2,
      returnKeyType: 'go'
    };
  }

  /**
   * 回调函数当软键盘的确定
   * @memberof TextInputPackage
   */
  onSubmitEditing = val => {
    console.log(val);
  };

  onOperate = item => {
    this.setState({ [item.type]: !this.state[item.type] });
  };

  onOperateSecond = item => {
    this.setState({ [item.type]: item.value });
  };

  previewDemoOne = ({ type, multiline }) => {
    return (
      <View
        style={{
          height: multiline ? 80 : 40,
          width: 260,
          borderColor: '#dcdfe6',
          borderWidth: 1,
          borderRadius: 4,
          padding: 4
        }}
      >
        <TextInput
          style={{ padding: 0, margin: 0 }}
          ref='TextInput'
          onSubmitEditing={this.onSubmitEditing}
          onChangeText={text => this.setState({ [type]: text })}
          value={this.state[type]}
          caretHidden={this.state.caretHidden}
          editable={this.state.editable}
          enablesReturnKeyAutomatically={
            this.state.enablesReturnKeyAutomatically
          }
          keyboardAppearance={this.state.keyboardAppearance}
          keyboardType={this.state.keyboardType}
          maxLength={this.state.maxLength}
          multiline={multiline}
          numberOfLines={this.state.numberOfLines}
          returnKeyType={this.state.returnKeyType}
          secureTextEntry={this.state.secureTextEntry}
          inlineImageLeft={this.state.inlineImageLeft}
          placeholder={PLACEHOLDER}
          placeholderTextColor={PLACEHOLDERTEXTCOLOR}
          selectionColor={SELECTIONCOLOR}
          autoFocus={false}
          inlineImagePadding={5}
        />
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
          html={[COMPONENT_VALUE, 'FIRST']}
          codeHeight={60}
          operateList={OPERATE_LIST_DEMO_ONE}
          onOperate={this.onOperate}
        >
          {this.previewDemoOne({ type: 'text_first', multiline: false })}
        </Card>

        {/** demo - 2 */}
        <Card
          html={[COMPONENT_VALUE, 'SECOND']}
          codeHeight={60}
          operateList={OPERATE_LIST_DEMO_SECOND}
          onOperate={this.onOperateSecond}
        >
          {this.previewDemoOne({ type: 'text_second', multiline: true })}
        </Card>
      </Package>
    );
  }
}

export default TextInputPackage;
