export default `
import React, { Component } from 'react';
import { View, Text, AccessibilityInfo } from 'react-native';

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
    AccessibilityInfo.fetch().then(isEnabled =&gt {
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

  _handleScreenReaderToggled = isEnabled =&gt {
    this.setState({
      screenReaderEnabled: isEnabled
    });
  };

  render() {
    return (
      &ltView&gt
        &ltText&gt
          The screen reader is{' '}
          {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
        &lt/Text&gt
      &lt/View&gt
    );
  }
}

export default AccessibilityInfoPackage;\n`;
