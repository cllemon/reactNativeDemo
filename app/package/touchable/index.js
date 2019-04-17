import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '响应触摸操作 - 高亮/透明度/没有任何视觉反馈';
const COMPONENT_VALUE = 'Touchable';

class TouchablePackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  previewDemoOne = () => {
    const { count } = this.state;
    return (
      <View style={{ flexDirection: 'column', height: 300 }}>
        <Text style={[styles.title, { color: 'red', fontSize: 30 }]}>
          {count}
        </Text>
        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => {
            this.setState({ count: count + 1 });
          }}
        >
          <Text style={styles.title}>TouchableHighlight</Text>
        </TouchableHighlight>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.2}
          onPress={() => {
            this.setState({ count: count - 1 });
          }}
        >
          <Text style={styles.title}>TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback
          onPress={() => {
            this.setState({ count: count * 0 });
          }}
        >
          <View style={styles.button}>
            <Text style={styles.title}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
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
        <Card html={COMPONENT_VALUE} codeHeight={910}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 200,
    backgroundColor: '#409EFF',
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 4
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 40
  }
});

export default TouchablePackage;
