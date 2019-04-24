export default `
import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Button } from 'react-native';

class DrawerLayoutAndroidPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  _renderNavigationView = () =&gt {
    return (
      &ltView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          padding: 20
        }}
      &gt
        &ltButton
          onPress={() =&gt {
            this.DrawerLayoutAndroid.closeDrawer();
          }}
          title='close drawer'
        /&gt
      &lt/View&gt
    );
  };

  previewDemoOne = () =&gt {
    return OPERATE_LIST.map((item, index) =&gt {
      return (
        &ltView style={{ margin: 26 }} key={index}&gt
          &ltButton
            onPress={() =&gt {
              this._onOperate(item);
            }}
            title={item.label}
          /&gt
        &lt/View&gt
      );
    });
  };

  _onOperate = async item =&gt {
    await this.setState({ position: item.value });
    this.DrawerLayoutAndroid[item.type]();
  };

  render() {
    return (
      &ltDrawerLayoutAndroid
        ref={drawer =&gt {
          this.DrawerLayoutAndroid = drawer;
        }}
        drawerWidth={260}
        drawerPosition={DrawerLayoutAndroid.positions[this.state.position]}
        renderNavigationView={this._renderNavigationView}
      &gt
        {this.previewDemoOne()}
      &lt/DrawerLayoutAndroid&gt
    );
  }
}

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

export default DrawerLayoutAndroidPackage;\n`;
