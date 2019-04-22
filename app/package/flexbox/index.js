import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = 'FlexBox布局';
const COMPONENT_VALUE = 'FlexBox';
const OPERATE_LIST = [
  {
    label: 'row',
    value: {
      flexDirection: 'row'
    }
  },
  {
    label: 'row-reverse',
    value: {
      flexDirection: 'row-reverse'
    }
  },
  {
    label: 'column',
    value: {
      flexDirection: 'column'
    }
  },
  {
    label: 'column-reverse',
    value: {
      flexDirection: 'column-reverse'
    }
  }
];

class FlexBoxPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: {}
    };
  }

  previewDemoOne = () => {
    return (
      <View style={[styles.wraper, this.state.layout]}>
        <View style={styles.box} />
        <View style={[styles.box, { backgroundColor: '#606266', flex: 2 }]} />
        <View style={[styles.box, { backgroundColor: '#C0C4CC', felx: 4 }]} />
        <View style={[styles.box, { backgroundColor: '#EBEEF5', flex: 3 }]} />
      </View>
    );
  };

  _onOperate = item => {
    this.setState({ layout: item.value });
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
          codeHeight={60}
          operateList={OPERATE_LIST}
          onOperate={this._onOperate}
        >
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

const styles = StyleSheet.create({
  wraper: {
    width: 380,
    padding: 10
  },
  box: {
    flex: 1,
    height: 46,
    backgroundColor: '#303133',
    borderRadius: 6,
    marginHorizontal: 10,
    marginVertical: 15
  }
});
export default FlexBoxPackage;
