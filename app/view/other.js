import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const BASE_URL = 'https://reactnative.cn/docs/';

class OtherView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: `${BASE_URL}getting-started/`,
      preURL: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const { params } = nextProps.navigation.state;
    if (params && params.value) {
      const url = `${BASE_URL}${params.value.toLocaleLowerCase()}/`;
      console.log(url);
      if (url !== this.state.preURL) {
        new Promise((resolve, reject) => {
          this.setState({ url: 'https://reactnative.cn', preURL: url });
          resolve();
        }).then(() => {
          this.setState({ url });
        });
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref='webviewbridge'
          onLoadEnd={() => {
            this.setState({ preURL: '' });
          }}
          startInLoadingState={true}
          automaticallyAdjustContentInsets={true}
          source={{ uri: this.state.url }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default OtherView;
