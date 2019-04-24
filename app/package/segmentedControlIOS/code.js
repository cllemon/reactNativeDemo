export default `
import React, { Component } from 'react';
import { View, SegmentedControlIOS, Text } from 'react-native';

const TAB = ['One', 'Two'];

class SegmentedControlIOSPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      selectedTintColorIndex: 0
    };
  }

  render() {
    return (
      &ltView style={{ flex: 1, padding: 10 }}&gt
        &ltSegmentedControlIOS
          values={TAB}
          selectedIndex={this.state.selectedIndex}
          onChange={event =&gt {
            this.setState({
              selectedIndex: event.nativeEvent.selectedSegmentIndex
            });
          }}
          style={{ marginVertical: 30 }}
        /&gt
        &ltSegmentedControlIOS
          values={TAB}
          enabled={false}
          selectedIndex={1}
          style={{ marginVertical: 30 }}
        /&gt

        &ltView style={{ marginVertical: 30 }}&gt
          &ltSegmentedControlIOS
            values={TAB}
            selectedIndex={this.state.selectedTintColorIndex}
            onChange={event =&gt {
              this.setState({
                selectedTintColorIndex: event.nativeEvent.selectedSegmentIndex
              });
            }}
            tintColor={'red'}
          /&gt
          &ltView
            style={{
              height: 100,
              borderColor: 'red',
              borderWidth: 1,
              borderTopWidth: 0,
              borderRadius: 4,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          &gt
            &ltText&gt当前选择：{TAB[this.state.selectedTintColorIndex]}&lt/Text&gt
          &lt/View&gt
        &lt/View&gt
      &lt/View&gt
    );
  }
}

export default SegmentedControlIOSPackage;\n`;
