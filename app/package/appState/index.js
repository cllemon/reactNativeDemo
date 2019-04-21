import React, { Component } from 'react';
import { View, Text, AppState } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '应用当前是在前台还是在后台';
const COMPONENT_VALUE = 'AppState';

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

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
    }
    this.setState({ appState: nextAppState });
  };

  previewDemoOne = () => {
    return (
      <View>
        <Text>
          Current state is:{' '}
          <Text style={{ color: 'blue' }}>{this.state.appState}</Text>
        </Text>

        <Text style={{ color: '#999', fontSize: 9, marginTop: 10 }}>
          例子只会显示"Current state is:
          active"，这是因为应用只有在active状态下才能被用户看到
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

export default AppStatePackage;
