import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { APILabel } from '../common/enume';
import { VALUE } from '../common/constance';
import Folding from '../widget/folding';

class APIView extends Component {
  onFoldingItemOperate = value => {
    // this.props.navigation.navigate(value);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.folding_list}>
          <View style={styles.tips}>
            <Text style={styles.tips_title_h1}>{VALUE.introduceTitle}</Text>
            <Text style={styles.tips_title_text}>{VALUE.introduce}</Text>
          </View>
          {APILabel.map(item => (
            <Folding
              title={item.label}
              icon={item.icon}
              data={item.children}
              key={item.value}
              onFoldingItemOperate={this.onFoldingItemOperate}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  tips: {
    width: VALUE.width,
    height: VALUE.height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  tips_title_h1: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#999',
    marginBottom: 10
  },
  tips_title_text: {
    fontSize: 12,
    color: '#999'
  },
  folding_list: {
    width: VALUE.width,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center'
  }
});

export default APIView;
