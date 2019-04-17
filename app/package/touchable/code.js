export default `
  import React, { Component } from 'react';
  import {
    View,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet
  } from 'react-native';
  class TouchablePackage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    render() {
      const { count } = this.state;
      return (
        &ltView style={{ flexDirection: 'column', height: 300 }}&gt
          &ltText style={[styles.title, { color: 'red', fontSize: 30 }]}&gt
            {count}
          &lt/Text&gt
          &ltTouchableHighlight
            style={styles.button}
            activeOpacity={0.7}
            onPress={() =&gt {
              this.setState({ count: count + 1 });
            }}
          &gt
            &ltText style={styles.title}&gtTouchableHighlight&lt/Text&gt
          &lt/TouchableHighlight&gt

          &ltTouchableOpacity
            style={styles.button}
            activeOpacity={0.2}
            onPress={() =&gt {
              this.setState({ count: count - 1 });
            }}
          &gt
            &ltText style={styles.title}&gtTouchableOpacity&lt/Text&gt
          &lt/TouchableOpacity&gt

          &ltTouchableWithoutFeedback
            onPress={() =&gt {
              this.setState({ count: count * 0 });
            }}
          &gt
            &ltView style={styles.button}&gt
              &ltText style={styles.title}&gtTouchableWithoutFeedback&lt/Text&gt
            &lt/View&gt
          &lt/TouchableWithoutFeedback&gt
        &lt/View&gt
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

  export default TouchablePackage;\n`;
