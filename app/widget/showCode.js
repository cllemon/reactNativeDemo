import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';
import { VALUE } from '../common/constance';
import { joinWebCodeBlock } from '../common/utils';
import { camelCase } from 'lodash';

// https://github.com/cllemon/reactNativeDemo/edit/master/app/package/accessibilityInfo/code.js
// https://github.com/cllemon/reactNativeDemo/edit/master/app/package/activityIndicator/code.js

const ShowCodePropsType = {
  html: PropTypes.string,
  height: PropTypes.number
};

const ShowCodeDefaultProps = {
  html: '',
  height: 240
};

class ShowCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <View style={styles.show_code}>
        <View style={styles.show_code_operate}>
          {/**
          <Text style={[styles.show_code_operate_text, { left: 10 }]} onPress={this.toggle}>
            在GitHub上编辑
          </Text>*/}
          <Text
            style={[
              styles.show_code_operate_text,
              this.state.open && styles.show_code_operate_text__active
            ]}
            onPress={this.toggle}
          >
            <IconEntypo name='code' />
            {this.state.open ? '  hidden code' : '  show code'}
          </Text>
        </View>
        {!this.state.open ? null : (
          <View style={[styles.webView, { height: this.props.height }]}>
            <WebView
              originWhitelist={['*']}
              startInLoadingState={true}
              automaticallyAdjustContentInsets={true}
              javaScriptEnabled={true}
              source={{ html: joinWebCodeBlock(this.props.html) }}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  show_code: {
    flex: 1,
    flexDirection: 'column'
  },
  show_code_operate: {
    height: 30,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  show_code_operate_text: {
    fontSize: 15,
    color: '#409EFF',
    position: 'absolute',
    right: 8,
    paddingTop: 4
  },
  show_code_operate_text__active: {
    fontSize: 13,
    color: '#eee'
  },
  show_code_text: {
    fontSize: 12,
    padding: 20,
    paddingBottom: 0,
    fontWeight: 'bold'
  },
  webView: {
    flex: 1,
    width: VALUE.width * 0.94,
    marginLeft: 4
  }
});

PropTypes.ShowCode = ShowCodePropsType;

ShowCode.defaultProps = ShowCodeDefaultProps;

export default ShowCode;
