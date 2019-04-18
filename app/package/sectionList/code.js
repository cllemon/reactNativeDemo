export default `
import React, { Component } from 'react';
import { View, Text, SectionList } from 'react-native';

const SECTIONS = [
  { title: 'Title1', data: ['item1', 'item2'] },
  { title: 'Title2', data: ['item3', 'item4'] },
  { title: 'Title3', data: ['item5', 'item6'] },
  { title: 'Title4', data: ['item7', 'item8'] },
  { title: 'Title5', data: ['item9', 'item10'] },
  { title: 'Title6', data: ['item11', 'item12'] },
  { title: 'Title7', data: ['item1', 'item2'] },
  { title: 'Title8', data: ['item3', 'item4'] },
  { title: 'Title9', data: ['item5', 'item6'] },
  { title: 'Title10', data: ['item7', 'item8'] },
  { title: 'Title11', data: ['item9', 'item10'] },
  { title: 'Title12', data: ['item11', 'item12'] }
];
class SectionListPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      &ltView style={{ height: 360, width: 340, padding: 10 }}&gt
        &ltSectionList
          renderItem={({ item, index, section }) =&gt (
            &ltText
              key={index}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
                textAlign: 'center',
                height: 40,
                lineHeight: 40
              }}
            &gt
              {item}
            &lt/Text&gt
          )}
          renderSectionHeader={({ section: { title } }) =&gt (
            &ltText
              style={{
                fontWeight: 'bold',
                padding: 4,
                fontSize: 16,
                backgroundColor: '#eee'
              }}
            &gt
              {title}
            &lt/Text&gt
          )}
          sections={SECTIONS}
          keyExtractor={(item, index) =&gt item + index}
        /&gt
      &lt/View&gt
    );
  }
}

export default SectionListPackage;\n`;
