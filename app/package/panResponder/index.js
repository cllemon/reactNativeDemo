import React, { Component } from 'react';
import { View, PanResponder, Animated } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '将多点触摸操作协调成一个手势';
const COMPONENT_VALUE = 'PanResponder';

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
  _onPanResponderGrant = (evt, gestureState) => {
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
  _onPanResponderMove = () =>
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
  _onPanResponderRelease = (evt, gestureState) => {
    const initPosition = [gestureState.x0, gestureState.y0];
    const lastPositionMove = [gestureState.moveX, gestureState.moveY];
    console.log('done initPosition, ', lastPositionMove);
    if (
      lastPositionMove[0] > 380 ||
      lastPositionMove[0] < 30 ||
      lastPositionMove[1] < 200 ||
      lastPositionMove[1] > 600
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
  initPanResponder = () => {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderGrant: this._onPanResponderGrant,
      onPanResponderMove: this._onPanResponderMove(),
      onPanResponderRelease: this._onPanResponderRelease
    });
  };

  componentWillMount() {
    this.initPanResponder();
  }

  previewDemoOne = () => {
    const { dynamicPosition, scale } = this.state;
    const [translateX, translateY] = [dynamicPosition.x, dynamicPosition.y];
    const transform = {
      transform: [{ translateX }, { translateY }, { scale }],
      height: 400
    };
    return (
      <Animated.View style={transform} {...this._panResponder.panHandlers}>
        <View style={{ height: 70, width: 70, backgroundColor: '#409eff' }} />
      </Animated.View>
    );
  };

  render() {
    return (
      <Package
        label={COMPONENT_LABEL}
        value={COMPONENT_VALUE}
        navigation={this.props.navigation}
      >
        {/** demo - 1 */}
        <Card html={COMPONENT_VALUE} codeHeight={1670}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default PanResponderPackage;
