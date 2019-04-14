/**
 * 折叠框
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { VALUE } from '../common/constance';

const FoldingPropsType = {
  title: PropTypes.string,
  icon: PropTypes.string,
  data: PropTypes.array,
  onFoldingItemOperate: PropTypes.func
};

const FoldingDefaultProps = {
  title: '按钮文案',
  icon: '',
  data: [],
  onFoldingItemOperate: () => {}
};

class Folding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  onToggle = () => {
    this.setState({ open: !this.state.open });
  };

  content = () => {
    return (
      <View
        style={[
          styles.folding_content,
          !this.state.open && { display: 'none' }
        ]}
      >
        {this.props.data.map(item => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              key={item.value}
              onPress={() => {
                this.props.onFoldingItemOperate(item.value);
              }}
              style={{ borderTopColor: '#eee', borderTopWidth: 1 }}
            >
              <View style={styles.folding_content_item}>
                <Text
                  numberOfLines={1}
                  style={styles.folding_content_item__text}
                >
                  {item.value}
                </Text>
                <Text
                  numberOfLines={1}
                  style={[
                    styles.folding_content_item__text,
                    styles.folding_content_item__label
                  ]}
                >
                  {item.label}
                </Text>
                <Icon name='right' style={styles.folding_content_item__icon} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.folding}>
        <TouchableOpacity activeOpacity={0.6} onPress={this.onToggle}>
          <View style={styles.folding_title}>
            <View style={{ flexDirection: 'row' }}>
              <IconEntypo
                name={this.props.icon}
                style={[
                  styles.folding_content_item__IconEntypo,
                  this.state.open && styles.folding_content_item__active
                ]}
              />
              <Text
                style={[
                  styles.folding_title_text,
                  this.state.open && styles.folding_content_item__active
                ]}
              >
                {this.props.title}
              </Text>
            </View>
            <Icon
              name={this.state.open ? 'down' : 'up'}
              style={[
                styles.folding_icon,
                this.state.open && styles.folding_content_item__active
              ]}
            />
          </View>
        </TouchableOpacity>
        {this.content()}
        {/**!this.state.open ? null : this.content()*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  folding: {
    flexDirection: 'column',
    width: VALUE.width * 0.9,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    elevation: 4
  },
  folding_icon: {
    fontSize: 26,
    color: '#999'
  },
  folding_title: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 14
  },
  folding_title_text: {
    fontSize: 18,
    color: '#999',
    marginLeft: 10
  },
  folding_content_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  folding_content_item__text: {
    fontSize: 14,
    color: '#000000',
    width: VALUE.width * 0.33
  },
  folding_content_item__label: {
    width: VALUE.width * 0.44,
    color: '#999'
  },
  folding_content_item__icon: {
    fontSize: 20,
    color: '#999'
  },
  folding_content_item__IconEntypo: {
    fontSize: 24,
    color: '#aaa'
  },
  folding_content_item__active: {
    color: '#409EFF',
    fontWeight: 'bold'
  }
});

PropTypes.Folding = FoldingPropsType;

Folding.defaultProps = FoldingDefaultProps;

export default Folding;
