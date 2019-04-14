import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../common/style';

import Header from './header';

const packagePropsType = {
  label: PropTypes.string,
  value: PropTypes.string,
  navigation: PropTypes.object
};

const packageDefaultProps = {
  label: '',
  value: '',
  navigation: {}
};

class Package extends Component {
  onJumper = () => {
    this.props.navigation.navigate('Other', { value: this.props.value });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header label={this.props.label} value={this.props.value} />
          {this.props.children}
          <Text onPress={this.onJumper} style={styles.container_doc}>
            API 详见官方文档
          </Text>
        </ScrollView>
      </View>
    );
  }
}

PropTypes.Package = packagePropsType;

Package.defaultProps = packageDefaultProps;

export default Package;
