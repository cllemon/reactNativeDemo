import React, { Component } from 'react';
import { View, SegmentedControlIOS, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = 'iOS 平台 - 分段显示多个选项';
const COMPONENT_VALUE = 'SegmentedControlIOS';
const TAB = ['One', 'Two'];

class SegmentedControlIOSPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      selectedTintColorIndex: 0
    };
  }

  // enabled={this.state.enabled}
  //

  previewDemoOne = () => {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <SegmentedControlIOS
          values={TAB}
          selectedIndex={this.state.selectedIndex}
          onChange={event => {
            this.setState({
              selectedIndex: event.nativeEvent.selectedSegmentIndex
            });
          }}
          style={{ marginVertical: 30 }}
        />
        <SegmentedControlIOS
          values={TAB}
          enabled={false}
          selectedIndex={1}
          style={{ marginVertical: 30 }}
        />

        <View style={{ marginVertical: 30 }}>
          <SegmentedControlIOS
            values={TAB}
            selectedIndex={this.state.selectedTintColorIndex}
            onChange={event => {
              this.setState({
                selectedTintColorIndex: event.nativeEvent.selectedSegmentIndex
              });
            }}
            tintColor={'red'}
          />
          <View
            style={{
              height: 100,
              borderColor: 'red',
              borderWidth: 1,
              borderTopWidth: 0,
              borderRadius: 4,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>当前选择：{TAB[this.state.selectedTintColorIndex]}</Text>
          </View>
        </View>
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
        <Card html={COMPONENT_VALUE} codeHeight={930}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default SegmentedControlIOSPackage;
