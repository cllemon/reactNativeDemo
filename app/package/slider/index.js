import React, { Component } from 'react';
import { View, Slider, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '范围值选择器';
const COMPONENT_VALUE = 'Slider';
const SLIDER_LIST = [
  {
    type: 'oneValue',
    style: {} // 默认
  },
  {
    type: 'secondValue',
    value: 30,
    step: 1,
    maximumValue: 100,
    minimumValue: 0
  },
  {
    type: 'thirdValue',
    step: 10,
    maximumValue: 100,
    minimumValue: 0
  },
  {
    type: 'fourValue',
    value: 30,
    disabled: true,
    maximumValue: 100,
    minimumValue: 0
  },
  {
    type: 'fiveValue',
    maximumValue: 100,
    minimumValue: 10,
    step: 1,
    minimumTrackTintColor: '#F56C6C',
    maximumTrackTintColor: '#67C23A'
  }
];

class SliderPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onValueChange = (value, type) => {
    if (this.state[type] !== value) {
      this.setState({ [type]: value });
    }
  };

  formatter = (val = 0) => {
    return val.toFixed(2);
  };

  previewDemoOne = () => {
    return (
      <View>
        {SLIDER_LIST.map((item, index) => {
          return (
            <View style={{ flexDirection: 'row' }} key={index}>
              <Slider
                style={[{ width: 300, height: 60 }, item.style]}
                step={item.step}
                value={item.value}
                disabled={item.disabled}
                maximumValue={item.maximumValue}
                minimumValue={item.minimumValue}
                minimumTrackTintColor={item.minimumTrackTintColor}
                maximumTrackTintColor={item.maximumTrackTintColor}
                onValueChange={value => {
                  this.onValueChange(value, item.type);
                }}
                thumbImage={item.thumbImage}
                trackImage={item.trackImage}
                minimumTrackImage={item.minimumTrackImage}
                maximumTrackImage={item.maximumTrackImage}
              />
              <Text style={{ paddingTop: 18 }}>
                {this.formatter(this.state[item.type] || item.value)}
              </Text>
            </View>
          );
        })}
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
        <Card html={COMPONENT_VALUE} codeHeight={1020}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default SliderPackage;
