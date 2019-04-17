export default `
  import React, { Component } from 'react';
  import { View, Slider, Text } from 'react-native';
  class SliderPackage extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    onValueChange = (value, type) =&gt {
      if (this.state[type] !== value) {
        this.setState({ [type]: value });
      }
    };

    formatter = (val = 0) =&gt {
      return val.toFixed(2);
    };
    render() {
      return (
        &ltView&gt
          {SLIDER_LIST.map((item, index) =&gt {
            return (
              &ltView style={{ flexDirection: 'row' }} key={index}&gt
                &ltSlider
                  style={[{ width: 300, height: 60 }, item.style]}
                  step={item.step}
                  value={item.value}
                  disabled={item.disabled}
                  maximumValue={item.maximumValue}
                  minimumValue={item.minimumValue}
                  minimumTrackTintColor={item.minimumTrackTintColor}
                  maximumTrackTintColor={item.maximumTrackTintColor}
                  onValueChange={value =&gt {
                    this.onValueChange(value, item.type);
                  }}
                  thumbImage={item.thumbImage}
                  trackImage={item.trackImage}
                  minimumTrackImage={item.minimumTrackImage}
                  maximumTrackImage={item.maximumTrackImage}
                /&gt
                &ltText style={{ paddingTop: 18 }}&gt
                  {this.formatter(this.state[item.type] || item.value)}
                &lt/Text&gt
              &lt/View&gt
            );
          })}
        &lt/View&gt
      );
    }
  }
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

  export default SliderPackage;\n`;
