import React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  Easing,
  InteractionManager
} from 'react-native';

class SlidingView extends React.Component {
  state = {
    mode: 'sliding',
    slidingValue: new Animated.Value(-1) // 初始值设为1
  };

  componentDidMount() {
    this._timing(200);
  }

  _timing = (val = 0) => {
    Animated.timing(
      // 随时间变化而执行动画
      this.state.slidingValue, // 动画中的变量值
      {
        toValue: val, // 最终变为100
        easing: Easing.back(),
        duration: 1000 // 让动画持续一段时间
      }
    ).start(); // 开始执行动画
  };

  /**
   * 滑动
   */
  sliding = () => {
    this.setState({ mode: 'sliding' });
    this._timing();
    InteractionManager.runAfterInteractions(() => {
      this._timing(200);
    });
  };

  /**
   * 滚动
   */
  rolling = () => {
    this.setState({ mode: 'rolling' });
    this._timing();
    InteractionManager.runAfterInteractions(() => {
      this._timing(200);
    });
  };

  /**
   * 淡入淡出
   */
  fadeInOut = () => {
    this.setState({ mode: 'fadeInOut' });
    this._timing();
    InteractionManager.runAfterInteractions(() => {
      this._timing(1);
    });
  };

  _renderChild = () => {
    return <Text style={styles.container_title}>{this.state.mode}</Text>;
  };

  render() {
    const { slidingValue, mode } = this.state;
    const rotateZ = slidingValue.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg']
    });
    const ROLLING = mode === 'rolling';
    const FADEINOUT = mode === 'fadeInOut';
    return (
      <Animated.View
        style={[
          !this.props.style && styles.container,
          FADEINOUT && styles.container_fade,
          {
            ...this.props.style,
            borderRadius: ROLLING ? 70 : 6,
            opacity: FADEINOUT ? slidingValue : 1,
            transform: [
              { translateX: FADEINOUT ? 0 : slidingValue },
              { rotateZ: ROLLING ? rotateZ : '0deg' }
            ]
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
    width: 70,
    height: 70,
    backgroundColor: '#263238',
    justifyContent: 'center',
    padding: 10,
    position: 'absolute',
    left: -100
  },
  container_title: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container_fade: {
    width: 200,
    height: 200,
    margin: 40,
    position: 'relative'
  }
});

export default SlidingView;
