export default `
import React, { Component } from 'react';
import { View, Text, AppState } from 'react-native';

class AppStatePackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appState: AppState.currentState
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState =&gt {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
    }
    this.setState({ appState: nextAppState });
  };

  render() {
    return (
      &ltView&gt
      &ltText style={{ color: 'blue' }}&gt
        Current state is: {this.state.appState}
      &lt/Text&gt
      &ltText style={{ color: '#eee' }}&gt
        例子只会显示"Current state is:
        active"，这是因为应用只有在active状态下才能被用户看到
      &lt/Text&gt
    &lt/View&gt
    );
  }
}

export default AppStatePackage;\n`;
