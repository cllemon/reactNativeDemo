import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

class FadeInView extends React.Component {
  state = {
    fadeInValue: new Animated.Value(0) // 透明度初始值设为1
  };

  componentDidMount() {
    this.fadeIn();
  }

  /**
   * 淡入
   */
  fadeIn = () => {
    Animated.timing(
      // 随时间变化而执行动画
      this.state.fadeInValue, // 动画中的变量值
      {
        toValue: 1, // 透明度最终变为1，即完全不透明
        duration: 1000 // 让动画持续一段时间
      }
    ).start(); // 开始执行动画
  };

  /**
   * 淡出
   */
  fade = () => {
    Animated.timing(this.state.fadeInValue, {
      toValue: 0.04,
      duration: 1000
    }).start();
  };

  _renderChild = () => {
    return <Text style={styles.container_title}>FadeInAnimation</Text>;
  };

  render() {
    const { fadeInValue } = this.state;
    return (
      <Animated.View // 使用专门的可动画化的View组件
        style={[
          !this.props.style && styles.container,
          {
            ...this.props.style,
            opacity: fadeInValue // 将透明度指定为动画变量值
          }
        ]}
      >
        {this.props.children ? this.props.children : this._renderChild()}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#263238',
    borderRadius: 6
  },
  container_title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default FadeInView;
