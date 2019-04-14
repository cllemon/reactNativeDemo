import React, { Component } from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';
import { dataFactory } from '../../common/utils';

const COMPONENT_LABEL = '滚动视图';
const COMPONENT_VALUE = 'ScrollView';
const OPERATE_LIST_DEMO_ONE = [
  {
    label: '横向/竖向滚动',
    value: 'horizontalScroll',
    type: 'horizontalScroll'
  },
  {
    label: '禁止滚动',
    value: 'scrollEnabled',
    type: 'scrollEnabled'
  },
  {
    label: '显示水平滚动条',
    value: 'showsHorizontalScrollIndicator',
    type: 'showsHorizontalScrollIndicator'
  },
  {
    label: '显示垂直滚动条',
    value: 'showsVerticalScrollIndicator',
    type: 'showsVerticalScrollIndicator'
  },
  {
    label: '末尾禁止弹性拉动',
    value: 'bounces',
    type: 'bounces'
  },
  {
    label: '去顶部',
    value: 'scrollTo'
  },
  {
    label: '去底部',
    value: 'scrollToEnd'
  },
  {
    label: '启用下拉刷新',
    value: 'refreshControl',
    type: 'RefreshControl'
  }
];

class ScrollViewPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: dataFactory(),
      horizontalScroll: false, // 改变滚动方向
      scrollEnabled: true,
      showsHorizontalScrollIndicator: false,
      showsVerticalScrollIndicator: false,
      bounces: true,
      RefreshControl: false,
      refreshing: false,
      page: 1
    };
  }

  onOperate = item => {
    this.setState({ [item.type]: !this.state[item.type] });
    this.onScrollMethods(item.value);
  };

  onScrollMethods = value => {
    if (this.scroll) {
      if (value === 'scrollToEnd') this.scroll.scrollToEnd({ animated: true });
      if (value === 'scrollTo')
        this.scroll.scrollTo({ x: 0, y: 0, animated: true });
    }
  };

  renderScrollItem = () => {
    return this.state.list.map((item, index) => {
      return (
        <View
          key={index}
          style={[
            {
              marginBottom: 10,
              marginTop: 10,
              paddingBottom: 20,
              paddingTop: 20,
              paddingRight: 20,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 4,
              width: 360,
              backgroundColor: '#e9eef3',
              borderBottomColor: '#FFF',
              borderBottomWidth: 2,
              borderRadius: 6
            },
            this.state.horizontalScroll && {
              height: 258,
              borderRightColor: '#FFF',
              borderRightWidth: 1,
              marginRight: 20
            }
          ]}
        >
          <Text
            style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
          >
            {item.label}
          </Text>
        </View>
      );
    });
  };

  renderRefreshControl = () => {
    if (this.state.RefreshControl) {
      return (
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
      );
    }
    return null;
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      const data = dataFactory(this.state.page);
      const list = this.state.list.concat(data);
      this.setState({ list, page: this.state.page + 1 });
      this.setState({ refreshing: false });
      setTimeout(() => {
        this.scroll.scrollToEnd({ animated: true });
      }, 10);
    }, 1000);
  };

  previewDemoOne = () => {
    return (
      <View
        style={{
          height: 258,
          padding: 10
        }}
      >
        <ScrollView
          ref={scroll => {
            this.scroll = scroll;
          }}
          refreshControl={this.renderRefreshControl()}
          horizontal={this.state.horizontalScroll}
          scrollEnabled={this.state.scrollEnabled}
          showsHorizontalScrollIndicator={
            this.state.showsHorizontalScrollIndicator
          }
          showsVerticalScrollIndicator={this.state.showsVerticalScrollIndicator}
          bounces={this.state.bounces}
        >
          {this.renderScrollItem()}
        </ScrollView>
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
        {/** demo - 1 basic*/}
        <Card
          html={[COMPONENT_VALUE, 'FIRST']}
          operateList={OPERATE_LIST_DEMO_ONE}
          onOperate={this.onOperate}
          codeHeight={2440}
        >
          {this.previewDemoOne()}
        </Card>

        {/** demo - 3 下拉刷新
        <Card
          html={`${COMPONENT_VALUE}`}
          operateList={OPERATE_LIST_DEMO_ONE}
          onOperate={this.onOperate}
          codeHeight={1280}
        >
          {this.previewDemoOne()}
        </Card>
        */}
      </Package>
    );
  }
}

export default ScrollViewPackage;
