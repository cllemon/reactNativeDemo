import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { VALUE } from '../common/constance';

const LoadingPropsType = {
  visible: PropTypes.bool,
  title: PropTypes.string
};

const LoadingDefaultProps = {
  visible: false,
  title: '加载中...'
};

class Loading extends Component {
  content = () => {
    return (
      <View style={styles.content}>
        <ActivityIndicator
          size='large'
          color='#fff'
          animating={true}
          style={styles.content_icon}
        />
        <Text style={styles.content_title}>{this.props.title}</Text>
      </View>
    );
  };

  render() {
    if (this.props.visible) {
      return <View style={styles.container}>{this.content()}</View>;
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    width: VALUE.width,
    height: VALUE.height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 3000
  },

  content: {
    flexDirection: 'row',
    width: 180,
    height: 60,
    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60
  },
  content_title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'center'
  },
  content_icon: {
    marginRight: 10
  }
});

PropTypes.Loading = LoadingPropsType;

Loading.defaultProps = LoadingDefaultProps;

export default Loading;
