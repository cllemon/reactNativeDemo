import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../common/style';
import Header from './header';
import Loading from './loading';

const packagePropsType = {
  label: PropTypes.string,
  value: PropTypes.string,
  navigation: PropTypes.object,
  loading: PropTypes.bool
};

const packageDefaultProps = {
  label: '',
  value: '',
  navigation: {},
  loading: false
};

class Package extends Component {
  onJumper = () => {
    this.props.navigation.navigate('Other', { value: this.props.value });
  };

  render() {
    return (
      <View style={styles.container}>
        <Loading visible={this.props.loading} />
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
