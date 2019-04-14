import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { VALUE } from '../common/constance';

const HeaderPropsType = {
  label: PropTypes.string,
  value: PropTypes.string
};

const HeaderDefaultProps = {
  label: '',
  value: ''
};

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.value}</Text>
        <View style={styles.line} />
        <Text style={styles.title}>{this.props.label}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: VALUE.width,
    height: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  line: {
    width: 130,
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 4,
    marginTop: 4
  },
  title: {
    fontSize: 10,
    color: '#999'
  }
});

PropTypes.Header = HeaderPropsType;

Header.defaultProps = HeaderDefaultProps;

export default Header;
