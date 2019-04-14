import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from '../../widget/card';
import Package from '../../widget/package';

//
const COMPONENT_LABEL = '文本显示'; //
const COMPONENT_VALUE = 'Text';
const TEXT_FIRST_LIST = [
  {
    label: 'Text USES a Text layout without flexbox',
    style: {
      fontSize: 20,
      color: '#409EFF'
    }
  },
  {
    label: 'Text USES a Text layout without flexbox',
    style: {
      fontSize: 18,
      color: '#67C23A',
      textDecorationLine: 'underline'
    }
  },
  {
    label: 'Text USES a Text layout without flexbox',
    style: {
      fontSize: 16,
      color: '#E6A23C',
      textDecorationLine: 'line-through'
    }
  },
  {
    label: 'Text USES a Text layout without flexbox',
    style: {
      fontSize: 14,
      color: '#F56C6C'
    }
  },
  {
    label: 'Text USES a Text layout without flexbox',
    style: {
      fontSize: 12,
      color: '#909399'
    }
  },
  {
    label:
      'A React component for displaying text, and it also supports nesting, styling, and touch processing',
    style: {
      fontSize: 16,
      color: '#909399',
      padding: 20
    }
  }
];

const TEXT_OPERATE_LIST = [
  {
    label: '溢出符( tail )',
    value: 'tail',
    type: 'ellipsizeMode'
  },
  {
    label: '溢出符( middle )',
    value: 'middle',
    type: 'ellipsizeMode'
  },
  {
    label: '溢出符( head )',
    value: 'head',
    type: 'ellipsizeMode'
  },
  {
    label: '溢出符( clip )',
    value: 'clip',
    type: 'ellipsizeMode'
  },
  {
    label: '开启长按选择',
    value: true,
    type: 'selectable'
  },
  {
    label: '禁用长按选择',
    value: false,
    type: 'selectable'
  }
];

class TextPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ellipsizeMode: 'tail',
      selectable: false
    };
  }

  previewDemoOne = list => {
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          minHeight: 200,
          marginTop: 20
        }}
      >
        {list.map((item, index) => {
          return (
            <Text
              key={index}
              numberOfLines={1}
              ellipsizeMode={this.state.ellipsizeMode}
              selectable={this.state.selectable}
              style={[
                {
                  fontWeight: 'bold',
                  textAlign: 'left',
                  paddingBottom: 20
                },
                item.style
              ]}
            >
              {item.label}
            </Text>
          );
        })}
      </View>
    );
  };

  onOperate = item => {
    this.setState({ [item.type]: item.value });
  };

  render() {
    return (
      <Package
        label={COMPONENT_LABEL}
        value={COMPONENT_VALUE}
        navigation={this.props.navigation}
      >
        {/** demo - 1 */}
        <Card
          html={[COMPONENT_VALUE, 'FIRST']}
          codeHeight={2044}
          operateList={TEXT_OPERATE_LIST}
          onOperate={this.onOperate}
        >
          {this.previewDemoOne(TEXT_FIRST_LIST)}
        </Card>
      </Package>
    );
  }
}

export default TextPackage;
