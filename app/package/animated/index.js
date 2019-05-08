import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';
import { OPERATE_LIST_FADE, OPERATE_LIST_SLIDING } from './operateEnume';
import { FadeInAnimation, SlidingAnimation } from './collection/index';

const COMPONENT_LABEL = '创建精细的交互控制的动画';
const COMPONENT_VALUE = 'Animated';

class AnimatedPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  _onOperate = item => {
    this[item.type][item.value](item.options);
  };

  previewDemoOne = () => {
    return (
      <View style={styles.wraper}>
        <FadeInAnimation ref={_ref => (this.FadeInAnimation = _ref)} />
      </View>
    );
  };

  previewDemoSecond = () => {
    return (
      <View style={styles.wraper}>
        <SlidingAnimation ref={_ref => (this.SlidingAnimation = _ref)} />
      </View>
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
        <Card
          html={COMPONENT_VALUE}
          codeHeight={80}
          operateList={OPERATE_LIST_FADE}
          onOperate={this._onOperate}
        >
          {this.previewDemoOne()}
        </Card>
        {/** demo - 2 */}
        <Card
          html={COMPONENT_VALUE}
          codeHeight={80}
          operateList={OPERATE_LIST_SLIDING}
          onOperate={this._onOperate}
        >
          {this.previewDemoSecond()}
        </Card>
      </Package>
    );
  }
}

const styles = StyleSheet.create({
  wraper: {
    padding: 20,
    justifyContent: 'center',
    marginVertical: 40
  }
});
export default AnimatedPackage;
