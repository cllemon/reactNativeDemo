import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

const COMPONENT_LABEL = '显示多种不同类型图片组件';
const COMPONENT_VALUE = 'Image';
const REACT_ICON_URL =
  'https://facebook.github.io/react-native/docs/assets/favicon.png';

const BASIC_LIST = [
  {
    style: { width: 100, height: 100 }
  },
  {
    style: { width: 75, height: 75 }
  },
  {
    style: { width: 50, height: 50 }
  },
  {
    style: { width: 25, height: 25 }
  },
  {
    style: { width: 15, height: 15 }
  }
];

const GIF_LIST = [
  {
    style: { width: 100, height: 60 },
    url: 'https://cdn-images-1.medium.com/max/1600/1*y7w6clg5b0QntgonMktTAw.gif'
  },
  {
    style: { width: 100, height: 100 },
    url: 'https://cdn-images-1.medium.com/max/1600/1*y7w6clg5b0QntgonMktTAw.gif'
  }
];

class ImagePackage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  previewDemoOne = list => {
    return (
      <View
        style={{ flexDirection: 'row', justifyContent: 'center', padding: 30 }}
      >
        {list.map((item, index) => {
          return (
            <Image
              style={[{ marginRight: 15 }, item.style]}
              key={index}
              source={{ uri: item.url ? item.url : REACT_ICON_URL }}
            />
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
        <Card html={[COMPONENT_VALUE, 'FIRST']} codeHeight={560}>
          {this.previewDemoOne(BASIC_LIST)}
        </Card>
        {/** demo - 2
        <Card html={[COMPONENT_VALUE, 'FIRST']} codeHeight={640}>
          {this.previewDemoOne(GIF_LIST)}
        </Card>*/}
      </Package>
    );
  }
}

export default ImagePackage;
