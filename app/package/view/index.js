import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '创建 UI 时最基础的组件';
const COMPONENT_VALUE = 'View';
const VIEW_FIRST_LIST = [
  {
    label: '一个支持Flexbox布局，样式，一些触摸处理，和一些无障碍功能的容器\n',
    viewStyle: {
      width: 150,
      height: 100,
      backgroundColor: '#409EFF',
      borderRadius: 10,
      margin: 10,
      elevation: 4,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
      padding: 20
    }
  },
  {
    label: '一个支持Flexbox布局，样式，一些触摸处理，和一些无障碍功能的容器\n',
    viewStyle: {
      width: 150,
      height: 100,
      marginRight: 4,
      borderColor: '#eee',
      borderWidth: 2,
      elevation: 4
    },
    textStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      padding: 20
    }
  }
];
const VIEW_SECOND_LIST = [
  {
    label: '',
    viewStyle: {
      width: 205,
      height: 160,
      borderColor: '#409EFF',
      borderWidth: 2,
      borderRadius: 10,
      margin: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    children: () => {
      return (
        <View
          style={{
            backgroundColor: 'gray',
            width: 150,
            height: 102,
            elevation: 10,
            marginBottom: 18,
            padding: 10,
            borderRadius: 4
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              marginBottom: 10,
              height: 80
            }}
          >
            它可以放到其它的视图里，也可以有任意多个任意类型的子视图
          </Text>
        </View>
      );
    }
  }
];

class ViewPackage extends Component {
  previewDemoOne = list => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          minHeight: 200,
          alignItems: 'center'
        }}
      >
        {list.map((item, index) => {
          return (
            <View style={item.viewStyle} key={index}>
              <Text style={item.textStyle}>{item.label}</Text>
              {item.children && item.children()}
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
        <Card html={[COMPONENT_VALUE, 'FIRST']} codeHeight={770}>
          {this.previewDemoOne(VIEW_FIRST_LIST)}
        </Card>

        {/** demo - 2 */}
        <Card html={[COMPONENT_VALUE, 'SECOND']} codeHeight={844}>
          {this.previewDemoOne(VIEW_SECOND_LIST)}
        </Card>
      </Package>
    );
  }
}

export default ViewPackage;
