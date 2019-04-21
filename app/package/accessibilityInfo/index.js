import React, { Component } from 'react';
import { View, Text, AccessibilityInfo } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '查询读屏应用的当前状态';
const COMPONENT_VALUE = 'AccessibilityInfo';

class AccessibilityInfoPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenReaderEnabled: false
    };
  }

  componentDidMount() {
    AccessibilityInfo.addEventListener(
      'change',
      this._handleScreenReaderToggled
    );
    AccessibilityInfo.fetch().then(isEnabled => {
      this.setState({
        screenReaderEnabled: isEnabled
      });
    });
  }

  componentWillUnmount() {
    AccessibilityInfo.removeEventListener(
      'change',
      this._handleScreenReaderToggled
    );
  }

  _handleScreenReaderToggled = isEnabled => {
    this.setState({
      screenReaderEnabled: isEnabled
    });
  };

  previewDemoOne = () => {
    return (
      <View>
        <Text>
          The screen reader is{' '}
          <Text style={{ color: 'blue' }}>
            {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
          </Text>
        </Text>
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
        <Card html={COMPONENT_VALUE} codeHeight={560}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default AccessibilityInfoPackage;
