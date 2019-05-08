export default `
import React, { Component } from 'react';
import { View, PanResponder, Animated } from 'react-native';

class PanResponderPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenDrag: false,
      dynamicPosition: new Animated.ValueXY(),
      scale: new Animated.Value(1)
    };
  }

  /**
   * 响应拖拽开始函数
   * @memberof Drag
   */
  _onPanResponderGrant = (evt, gestureState) =&gt {
    Animated.timing(this.state.scale, {
      toValue: 1.2,
      duration: 10,
      useNativeDriver: true
    }).start();
  };

  /**
   * 响应拖拽移动时候，把从触摸操作开始时的累计横纵向路程，映射到dynamicPosition的X,Y
   * @memberof Drag
   */
  _onPanResponderMove = () =&gt
    Animated.event([
      {},
      {
        dx: this.state.dynamicPosition.x,
        dy: this.state.dynamicPosition.y
      }
    ]);

  /**
   * 完成拖拽（移动位置为中心点）
   * @memberof Drag
   */
  _onPanResponderRelease = (evt, gestureState) =&gt {
    const initPosition = [gestureState.x0, gestureState.y0];
    const lastPositionMove = [gestureState.moveX, gestureState.moveY];
    console.log('done initPosition, ', lastPositionMove);
    if (
      lastPositionMove[0] &gt 380 ||
      lastPositionMove[0] &lt 30 ||
      lastPositionMove[1] &lt 200 ||
      lastPositionMove[1] &gt 600
    ) {
      this.setOriginalLocation();
    }
    Animated.timing(this.state.scale, {
      toValue: 0.8,
      duration: 200,
      useNativeDriver: true
    }).start();
  };

  /**
   * 设置为原始位置
   */
  setOriginalLocation() {
    this.state.dynamicPosition.setValue({
      x: 0,
      y: 0
    });
    Animated.timing(this.state.scale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true
    }).start();
  }

  /**
   * 初始化PanResponder
   *
   * @memberof Drag
   */
  initPanResponder = () =&gt {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) =&gt true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) =&gt true,
      onMoveShouldSetPanResponder: (evt, gestureState) =&gt true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) =&gt true,
      onPanResponderTerminationRequest: (evt, gestureState) =&gt true,
      onPanResponderGrant: this._onPanResponderGrant,
      onPanResponderMove: this._onPanResponderMove(),
      onPanResponderRelease: this._onPanResponderRelease
    });
  };

  componentWillMount() {
    this.initPanResponder();
  }

  render() {
    const { dynamicPosition, scale } = this.state;
    const [translateX, translateY] = [dynamicPosition.x, dynamicPosition.y];
    const transform = {
      transform: [{ translateX }, { translateY }, { scale }],
      height: 400
    };
    return (
      &ltAnimated.View style={transform} {...this._panResponder.panHandlers}&gt
        &ltView style={{ height: 70, width: 70, backgroundColor: '#409eff' }} /&gt
      &lt/Animated.View&gt
    );
  }
}

export default PanResponderPackage;\n`;
