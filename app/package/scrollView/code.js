export default {
  FIRST: `\n               /***** 简单实现 *****/\n
  import React, { Component } from 'react';
  import {
    ScrollView,
    View,
    Text,
    RefreshControl,
    Button
  } from 'react-native';

  class ScrollViewPackage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        list: dataFactory(),
        horizontalScroll: false,
        scrollEnabled: true,
        showsHorizontalScrollIndicator: false,
        showsVerticalScrollIndicator: false,
        bounces: true,
        RefreshControl: false,
        refreshing: false,
        page: 1
      };
    }

    onOperate = item =&gt {
      this.setState({ [item.type]: !this.state[item.type] });
      this.onScrollMethods(item.value);
    };

    onScrollMethods = value =&gt {
      if (this.scroll) {
        if (value === 'scrollToEnd')
          this.scroll.scrollToEnd({ animated: true });
        if (value === 'scrollTo')
          this.scroll.scrollTo({ x: 0, y: 0, animated: true });
      }
    };

    renderScrollItem = () =&gt {
      return this.state.list.map((item, index) =&gt {
        return (
          &ltView
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
                height: 300,
                borderRightColor: '#FFF',
                borderRightWidth: 1,
                marginRight: 20
              }
            ]}
          &gt
            &ltText
              style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
            &gt
              {item.label}
            &lt/Text&gt
          &lt/View&gt
        );
      });
    };

    renderRefreshControl = () =&gt {
      if (this.state.RefreshControl) {
        return (
          &ltRefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          /&gt
        );
      }
      return null;
    };

    _onRefresh = () =&gt {
      this.setState({ refreshing: true });
      setTimeout(() =&gt {
        const data = dataFactory(this.state.page);
        const list = this.state.list.concat(data);
        this.setState({
          list,
          page: this.state.page + 1,
          refreshing: false
        });
        this.scroll.scrollToEnd({ animated: true });
      }, 1000);
    };

    render() {
      return (
        &ltView style={{ flexDirection: 'column' }}&gt
          &ltView
            style={{
              height: 340,
              padding: 10
            }}
          &gt
            &ltScrollView
              ref={scroll =&gt {
                this.scroll = scroll;
              }}
              refreshControl={this.renderRefreshControl()}
              horizontal={this.state.horizontalScroll}
              scrollEnabled={this.state.scrollEnabled}
              showsHorizontalScrollIndicator={
                this.state.showsHorizontalScrollIndicator
              }
              showsVerticalScrollIndicator={
                this.state.showsVerticalScrollIndicator
              }
              bounces={this.state.bounces}
            &gt
              {this.renderScrollItem()}
            &lt/ScrollView&gt
          &lt/View&gt
          &ltView style={{ flexDirection: 'row', flexWrap: 'wrap' }}&gt
            {OPERATE_LIST_DEMO_ONE.map(item =&gt {
              return (
                &ltView style={{ margin: 10 }} key={item.value}&gt
                  &ltButton
                    title={item.label}
                    onPress={() =&gt {
                      this.onOperate(item);
                    }}
                    color='#409EFF'
                  /&gt
                &lt/View&gt
              );
            })}
          &lt/View&gt
        &lt/View&gt
      );
    }
  }


  const dataFactory = (page = 0, count = 25) =&gt {
    const list = [];
    for (let i = count * page; i &lt count * (page + 1); i++) {
      list.push({
        label: '🍋 ____🌲' + i + '🌲____ 🍋',
        value: 'data_' + i
      });
    }
    return list;
  };

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

  export default ScrollViewPackage;\n`
};
