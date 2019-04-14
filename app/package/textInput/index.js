import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '文本输入框';
const COMPONENT_VALUE = 'TextInput';

class TextInputPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  previewDemoOne = () => {
    return <View />;
  };

  render() {
    return (
      <Package
        label={COMPONENT_LABEL}
        value={COMPONENT_VALUE}
        navigation={this.props.navigation}
      >
        {/** demo - 1 */}
        <Card html={[COMPONENT_VALUE, 'FIRST']} codeHeight={2044}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default TextInputPackage;
