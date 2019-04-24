import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { VALUE } from '../common/constance';
import Icon from 'react-native-vector-icons/AntDesign';

const BASE_URL = 'https://reactnative.cn/docs/';

class OtherView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
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

  renderNavigation = () => {
    // const { state, navigate, setParams } = this.props.navigation;
    // if (state && state.params && state.params.value) {
    //   return (
    //     <View style={styles.navigation}>
    //       <TouchableOpacity
    //         onPress={() => {
    //           setParams({ value: '' });
    //           navigate(state.params.value);
    //         }}
    //       >
    //         <Icon name='left' style={styles.icon} />
    //       </TouchableOpacity>
    //     </View>
    //   );
    // }
    return <View style={styles.bar} />;
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderNavigation()}
        <WebView
          ref='webviewbridge'
          onLoadEnd={() => {
            this.setState({ preURL: '' });
          }}
          startInLoadingState={true}
          automaticallyAdjustContentInsets={true}
          source={{ uri: this.state.url || `${BASE_URL}getting-started/` }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bar: {
    paddingVertical: 10,
    backgroundColor: '#FFF',
    width: VALUE.width,
    borderBottomColor: '#999',
    borderBottomWidth: 1
  },
  navigation: {
    paddingVertical: 2,
    backgroundColor: '#FFF',
    width: VALUE.width,
    borderBottomColor: '#999',
    borderBottomWidth: 1
  },
  icon: {
    fontSize: 28,
    color: '#409EFF',
    marginTop: 20,
    marginLeft: 12
  }
});

export default OtherView;
