import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const OperatePropsType = {
  list: PropTypes.array,
  operate: PropTypes.func
};

const OperateDefaultProps = {
  list: [],
  operate: () => {
    console.log('Default response action function');
  }
};

class Operate extends Component {
  render() {
    return (
      <View style={styles.package_show_operate}>
        {this.props.list.map(item => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              key={item.value}
              onPress={() => {
                this.props.operate(item);
              }}
              style={styles.package_show_operate_btn}
            >
              <Text style={styles.package_show_operate_title} numberOfLines={1}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  package_show_operate: {
    minHeight: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  package_show_operate_btn: {
    width: 75,
    height: 30,
    backgroundColor: '#409EFF',
    padding: 4,
    marginLeft: 5,
    marginBottom: 15,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  package_show_operate_title: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold'
  }
});

PropTypes.Operate = OperatePropsType;

Operate.defaultProps = OperateDefaultProps;

export default Operate;
