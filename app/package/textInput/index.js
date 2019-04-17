import React, { Component } from 'react';
import { TextInput, View, KeyboardAvoidingView } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '文本输入框';
const COMPONENT_VALUE = 'TextInput';
const SELECTIONCOLOR = '#409EFF';
const PLACEHOLDERTEXTCOLOR = '#999';
const PLACEHOLDER = '请输入...';
const OPERATE_LIST_DEMO_ONE = [
  {
    label: '单/多选框',
    value: 'multiline',
    type: 'multiline'
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
  },
  {
    label: '数字键盘',
    value: 'numeric',
    type: 'keyboardType'
  },
  {
    label: '隐藏光标',
    value: 'caretHidden',
    type: 'caretHidden'
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
      text: '',
      editable: true,
      caretHidden: false,
      multiline: false,
      secureTextEntry: false,
      keyboardAppearance: 'default',
      keyboardType: 'default',
      inlineImageLeft: 'search_icon',
      maxLength: 200,
      numberOfLines: 2,
      returnKeyType: 'go'
    };
  }

  onSubmitEditing = val => {
    console.log('软键盘的确定:', val);
  };

  onOperate = item => {
    if (item.type === 'keyboardType' || item.type === 'keyboardAppearance') {
      return this.setState({ [item.type]: item.value });
    }
    this.setState({ [item.type]: !this.state[item.type] });
  };

  previewDemoOne = () => {
    const {
      text,
      caretHidden,
      multiline,
      editable,
      keyboardAppearance,
      keyboardType,
      maxLength,
      numberOfLines,
      returnKeyType,
      secureTextEntry,
      inlineImageLeft
    } = this.state;
    return (
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        <View
          style={{
            height: multiline ? 80 : 40,
            width: 260,
            borderColor: Boolean(text.trim()) ? '#409EFF' : '#dcdfe6',
            borderWidth: 1,
            borderRadius: 4,
            padding: 4
          }}
        >
          <TextInput
            style={{ padding: 0, margin: 0 }}
            ref='TextInput'
            onSubmitEditing={this.onSubmitEditing}
            onChangeText={text => this.setState({ text })}
            value={text}
            caretHidden={caretHidden}
            editable={editable}
            keyboardAppearance={keyboardAppearance}
            keyboardType={keyboardType}
            maxLength={maxLength}
            multiline={multiline}
            numberOfLines={numberOfLines}
            returnKeyType={returnKeyType}
            secureTextEntry={secureTextEntry}
            inlineImageLeft={!multiline ? inlineImageLeft : ''}
            placeholder={PLACEHOLDER}
            placeholderTextColor={PLACEHOLDERTEXTCOLOR}
            selectionColor={SELECTIONCOLOR}
            autoFocus={false}
            inlineImagePadding={5}
            enablesReturnKeyAutomatically={false}
          />
        </View>
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
        <KeyboardAvoidingView>
          {/** demo - 1 */}
          <Card
            html={COMPONENT_VALUE}
            codeHeight={2230}
            operateList={OPERATE_LIST_DEMO_ONE}
            onOperate={this.onOperate}
          >
            {this.previewDemoOne()}
          </Card>
        </KeyboardAvoidingView>
      </Package>
    );
  }
}

export default TextInputPackage;
