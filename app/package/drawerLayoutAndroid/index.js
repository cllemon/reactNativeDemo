import React, { Component } from 'react';
import { View, Text, DrawerLayoutAndroid, Button } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = 'Android 平台 - 抽屉';
const COMPONENT_VALUE = 'DrawerLayoutAndroid';
const OPERATE_LIST = [
  {
    label: 'OPEN LEFT',
    value: 'LEFT',
    type: 'openDrawer'
  },
  {
    label: 'OPEN Right',
    value: 'Right',
    type: 'openDrawer'
  }
];

class DrawerLayoutAndroidPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: ''
    };
  }

  _renderNavigationView = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          padding: 20
        }}
      >
        <Button
          onPress={() => {
            this.DrawerLayoutAndroid.closeDrawer();
          }}
          title='close drawer'
        />
      </View>
    );
  };

  previewDemoOne = () => {
    return OPERATE_LIST.map((item, index) => {
      return (
        <View style={{ marginRight: 26 }} key={index}>
          <Button
            onPress={() => {
              this._onOperate(item);
            }}
            title={item.label}
          />
        </View>
      );
    });
  };

  _onOperate = async item => {
    await this.setState({ position: item.value });
    this.DrawerLayoutAndroid[item.type]();
  };

  render() {
    return (
      <DrawerLayoutAndroid
        ref={drawer => {
          this.DrawerLayoutAndroid = drawer;
        }}
        drawerWidth={260}
        drawerPosition={DrawerLayoutAndroid.positions[this.state.position]}
        renderNavigationView={this._renderNavigationView}
      >
        <Package
          label={COMPONENT_LABEL}
          value={COMPONENT_VALUE}
          navigation={this.props.navigation}
        >
          {/** demo - 1 */}
          <Card html={COMPONENT_VALUE} codeHeight={960}>
            {this.previewDemoOne()}
          </Card>
        </Package>
      </DrawerLayoutAndroid>
    );
  }
}

export default DrawerLayoutAndroidPackage;
