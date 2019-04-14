import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../common/style';
import { getCodeBlock } from '../common/utils';
import Operate from '../widget/operate';
import ShowCode from '../widget/showCode';

const CardPropsType = {
  operateList: PropTypes.array,
  onOperate: PropTypes.func,
  html: PropTypes.array,
  codeHeight: PropTypes.number
};

const CardDefaultProps = {
  operateList: [],
  onOperate: () => {},
  html: [],
  codeHeight: 240
};

class Card extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.package_show}>
          {/** 效果展示 **/}
          <View style={styles.package_show_component}>
            {this.props.children}
          </View>
          {/** 操作 **/}
          {!this.props.operateList.length ? null : (
            <Operate
              list={this.props.operateList}
              operate={this.props.onOperate}
            />
          )}
          {/** 代码展示 **/}
          <ShowCode
            html={this.props.html ? getCodeBlock(this.props.html) : ''}
            height={this.props.codeHeight}
          />
        </View>
      </View>
    );
  }
}

PropTypes.Card = CardPropsType;

Card.defaultProps = CardDefaultProps;

export default Card;
