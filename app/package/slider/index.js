import React, { Component } from 'react';
import { View, Slider } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '范围值选择器';
const COMPONENT_VALUE = 'Slider';

class SliderPackage extends Component {
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

export default SliderPackage;
