export default `
import React, { PureComponent } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { getList } from './mock';
import Icon from 'react-native-vector-icons/Entypo';

const PAGE_SIZE = 5;

class FlatListPackage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      data: [],
      loading: false,
      page: 1
    };
  }

  asyncPullData = async () =&gt {
    try {
      if (this.state.data.length &gt total) return false;
      this.setState({ loading: true });
      const { list, total } = await getList(this.state.page, PAGE_SIZE);
      const data = this.state.data.concat(list);
      this.setState({ data, total, page: this.state.page + 1 });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  async componentDidMount() {
    await this.asyncPullData();
  }

  _onItemPress = item =&gt {
    console.log(item);
  };

  /**
   * 下拉刷新
   */
  _onRefresh = () =&gt {
    console.log('下拉刷新');
  };

  /**
   * 触底操作
   */
  _onEndReached = () =&gt {
    if (this.state.data.length === this.state.total) return false;
    this.asyncPullData();
  };

  /**
   * 尾部组件
   */
  _ListFooterComponent = () =&gt {
    const { data, total } = this.state;
    if (data.length &lt total || this.state.loading) return false;
    return (
      &ltView style={styles.list_footer}&gt
        &ltText style={styles.list_footer_text}&gt我也是有底线的&lt/Text&gt
      &lt/View&gt
    );
  };

  /**
   * 列表为空时渲染该组件
   */
  _ListEmptyComponent = () =&gt {
    if (this.state.loading) return false;
    return (
      &ltView style={styles.none_wraper}&gt
        &ltText style={styles.none_wraper_text}&gt暂无数据!&lt/Text&gt
      &lt/View&gt
    );
  };

  /**
   * 为给定的 item 生成一个不重复的 key
   */
  _keyExtractor = (item, index) =&gt item.id;

  /**
   * 行与行之间的分隔线组件
   */
  _ItemSeparatorComponent = ({ highlighted, leadingItem }) =&gt {
    return (
      // &ltView style={[styles.separator, highlighted && { color: 'blue' }]} /&gt
      &ltView /&gt
    );
  };

  /**
   * 从data中挨个取出数据并渲染到列表
   */
  _renderItem = ({ item, index, separators }) =&gt {
    return (
      &ltTouchableOpacity
        style={styles.item}
        activeOpacity={0.7}
        onPress={() =&gt this._onItemPress(item)}
      &gt
        &ltView style={styles.item_image}&gt
          &ltImage
            style={styles.item_image_show}
            source={{ uri: item.owner.avatar_url }}
          /&gt
        &lt/View&gt
        &ltView style={styles.item_content}&gt
          &ltText
            style={[styles.item_content_title, { color: '#0366d6' }]}
            numberOfLines={1}
          &gt
            {item.full_name}
          &lt/Text&gt
          &ltText style={styles.item_content_title} numberOfLines={1}&gt
            {item.description}
          &lt/Text&gt
          &ltView style={styles.item_content_tag}&gt
            &ltText style={styles.item_content_tags}&gt
              &ltIcon name='star' style={styles.item_icon} /&gt
              {item.stargazers_count}
            &lt/Text&gt
            &ltText style={styles.item_content_tags}&gt
              &ltIcon name='flow-branch' style={styles.item_icon} /&gt
              {item.forks_count}
            &lt/Text&gt
            &ltText style={styles.item_content_tags}&gt
              &ltIcon
                name='controller-record'
                style={[styles.item_icon, { color: 'rgb(241, 224, 90)' }]}
              /&gt
              {item.language}
            &lt/Text&gt
          &lt/View&gt
        &lt/View&gt
      &lt/TouchableOpacity&gt
    );
  };

  _ref = FlatList =&gt {
    this.FlatList = FlatList;
  };

  _operateRefs = (type, ...params) =&gt {
    if (this.FlatList) {
      this.FlatList[type](...params);
    }
  };

  /**
   * 滚动到底部
   */
  _scrollToEnd = () =&gt {
    this._operateRefs('scrollToEnd');
  };

  /**
   * 将位于指定位置的元素滚动到可视区的指定位置
   * 0 - 1
   */
  _scrollToIndex = (num = 0) =&gt {
    this._operateRefs('scrollToIndex', num);
  };

  render() {
    const { loading, data } = this.state;
    return (
      &ltView style={{ flex: 1, padding: 10 }}&gt
        &ltFlatList
          data={data}
          refreshing={loading}
          ref={this._ref}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={this._ItemSeparatorComponent}
          ListEmptyComponent={this._ListEmptyComponent}
          ListFooterComponent={this._ListFooterComponent}
          onEndReachedThreshold={0.4}
          initialNumToRender={1}
          onEndReached={this._onEndReached}
          onRefresh={this._onRefresh}
        /&gt
      &lt/View&gt
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#999',
    width: 340,
    marginTop: 4
  },

  /** none */
  none_wraper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  none_wraper_text: {
    fontSize: 18,
    color: '#999'
  },

  /** list_footer */
  list_footer: {
    justifyContent: 'center',
    padding: 10
  },
  list_footer_text: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center'
  },

  /** render-item */
  item: {
    width: 320,
    height: 100,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#eee',
    padding: 4,
    borderRadius: 4
  },
  item_image: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4
  },
  item_image_show: {
    width: 48,
    height: 48
  },
  item_content: {
    flex: 1,
    flexDirection: 'column'
  },
  item_content_title: {
    fontSize: 14,
    color: '#222',
    width: 200,
    marginBottom: 14
  },
  item_content_tag: {
    flexDirection: 'row'
  },
  item_content_tags: {
    fontSize: 12,
    color: '#999',
    marginRight: 10,
    alignItems: 'center',
    alignContent: 'center'
  },
  item_icon: {
    color: '#999',
    fontSize: 16
  }
});

export default FlatListPackage;\n`;
