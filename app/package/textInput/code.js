export default `
  import React, { Component } from 'react';
  import { View, Button, TextInput } from 'react-native';

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

    onSubmitEditing = val =&gt {
      console.log('软键盘的确定:', val);
    };

    onOperate = item =&gt {
      if (item.type === 'keyboardType' || item.type === 'keyboardAppearance') {
        return this.setState({ [item.type]: item.value });
      }
      this.setState({ [item.type]: !this.state[item.type] });
    };

    render() {
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
        &ltView style={{ flex: 1 }}&gt
          &ltView
            style={{
              height: multiline ? 80 : 40,
              width: 260,
              borderColor: Boolean(text.trim()) ? '#409EFF' : '#dcdfe6',
              borderWidth: 1,
              borderRadius: 4,
              padding: 4
            }}
          &gt
            &ltTextInput
              style={{ padding: 0, margin: 0 }}
              ref='TextInput'
              onSubmitEditing={this.onSubmitEditing}
              onChangeText={text =&gt this.setState({ text })}
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
            /&gt
          &lt/View&gt
          &ltView style={{ flexDirection: 'row', flexWrap: 'wrap' }}&gt
            {OPERATE_LIST.map(item =&gt {
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

  const SELECTIONCOLOR = '#409EFF';
  const PLACEHOLDERTEXTCOLOR = '#999';
  const PLACEHOLDER = '请输入...';
  const OPERATE_LIST = [
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

  export default TextInputPackage;\n

  `;
