import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { VALUE } from '../common/constance';

/**
 * 简单实现，之后扩展
 * 透明度 动画 插槽 等
 */
class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: '',
      options: {}
    };
  }

  /**
   * 显示 toast
   * @param {String} message 显示信息
   * @param {Object} options 配置
   * @param {Array | String} options.position 显示位置
   * @param {Number} options.duration 显示时长
   */
  show = (message, options = {}) => {
    this.setState({ visible: true, message, options });
    setTimeout(() => {
      this.setState({ visible: false });
    }, options.duration || 1500);
  };

  _getPositionTop = () => {
    switch (this.state.options.position) {
      case 'TOP':
        return 60;
      case 'CENTER':
        return VALUE.height / 2 - 60;
      case 'BOTTOM':
        return VALUE.height - 60;
      default:
        return VALUE.height / 2 - 60;
    }
  };

  render() {
    if (this.state.visible) {
      return (
        <View style={[styles.content, { top: this._getPositionTop() }]}>
          <Text style={styles.content_title}>{this.state.message}</Text>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 180,
    minHeight: 60,
    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: VALUE.width / 2 - 90,
    right: 0,
    zIndex: 10000
  },

  content_title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 18,
    alignItems: 'center',
    textAlign: 'center',
    padding: 10
  }
});

export default Toast;
