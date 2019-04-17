export default `

/* Deprecated. Use react-native-viewpager instead. */

  import React, { Component } from 'react';
  import { View, ViewPagerAndroid, Text, Button } from 'react-native';

  class ViewPagerAndroidPackage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        scrollEnabled: true,
        currentPage: 0
      };
    }

    onPageSelected = event =&gt {
      this.setState({ currentPage: event.nativeEvent.position });
    };

    onOperate = item =&gt {
      if (item.type === 'togglePage') return this.setPage(item.value);
      this.setState({ [item.type]: !this.state[item.type] });
    };

    setPage = num =&gt {
      const lastPage = PAGE_LIST.length - 1;
      const page = this.state.currentPage + num;
      if (page &lt 0) {
        return this.jumper(lastPage);
      }
      if (page &gt lastPage) {
        return this.jumper(0);
      }
      this.jumper(page);
    };

    jumper = page =&gt {
      this.ViewPagerAndroid && this.ViewPagerAndroid.setPage(page);
      this.setState({ currentPage: page });
    };

    render() {
      const { scrollEnabled, currentPage } = this.state;
      return (
        &ltView&gt
          &ltView style={{ padding: 40 }}&gt
            &ltViewPagerAndroid
              ref={ViewPagerAndroid =&gt {
                this.ViewPagerAndroid = ViewPagerAndroid;
              }}
              initialPage={0}
              pageMargin={10}
              scrollEnabled={scrollEnabled}
              onPageSelected={this.onPageSelected}
              setPage={this.setPage}
              style={{
                width: 300,
                height: 200
              }}
            &gt
              {PAGE_LIST.map((item, index) =&gt {
                return (
                  &ltView
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: item.value,
                      borderRadius: 4,
                      opacity: 0.7
                    }}
                    key={index}
                  &gt
                    &ltText
                      style={{
                        fontSize: 40,
                        fontWeight: 'bold',
                        color: '#fff',
                        textAlign: 'center'
                      }}
                    &gt
                      {item.label}
                    &lt/Text&gt
                  &lt/View&gt
                );
              })}
            &lt/ViewPagerAndroid&gt
            &ltText style={{ textAlign: 'right' }}&gt{currentPage + 1 + '/' +
  PAGE_LIST.length}&lt/Text&gt
          &lt/View&gt
          &ltView style={{ flexDirection: 'row', flexWrap: 'wrap' }}&gt
            {OPERATE_LIST.map((item, index) =&gt {
              return (
                &ltView style={{ margin: 10 }} key={index}&gt
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

  const OPERATE_LIST = [
    {
      label: '上一页',
      value: -1,
      type: 'togglePage'
    },
    {
      label: '禁止滚动',
      value: 'scrollEnabled',
      type: 'scrollEnabled'
    },
    {
      label: '下一页',
      value: 1,
      type: 'togglePage'
    }
  ];
  const PAGE_LIST = [
    {
      label: '红色',
      value: 'red'
    },
    {
      label: '蓝色',
      value: 'blue'
    },
    {
      label: '绿色',
      value: 'green'
    },
    {
      label: '黑色',
      value: 'black'
    },
    {
      label: '#E6A23C',
      value: '#E6A23C'
    },
    {
      label: '#67C23A',
      value: '#67C23A'
    },
    {
      label: '#F56C6C',
      value: '#F56C6C'
    },
    {
      label: '#909399',
      value: '#909399'
    }
  ];

  export default ViewPagerAndroidPackage;\n`;
