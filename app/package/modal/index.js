import React, { Component } from 'react';
import { Text, View, Modal, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Card from '../../widget/card';
import Package from '../../widget/package';
import { VALUE } from '../../common/constance';

const COMPONENT_LABEL = '简单的覆盖在其他视图之上显示内容的方式';
const COMPONENT_VALUE = 'Modal';
const MODAL_LIST = [
  {
    label: 'default Modal',
    value: 'default'
  },
  {
    label: 'modified Modal',
    value: 'modified'
  }
];

class ModalInputPackage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      model: 'default'
    };
  }
  setModal = item => {
    if (item) {
      this.setState({ model: item.value });
    }
    this.setState({ modalVisible: Boolean(item) });
  };

  onRequestClose = () => {
    console.log(
      'Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件。'
    );
  };

  onDismiss = () => {
    console.log('modal 关闭');
  };

  onShow = () => {
    console.log('modal 打开');
  };

  renderModal = () => {
    return (
      <Modal
        animationType={this.state.model === 'default' ? 'slide' : 'fade'}
        transparent={true}
        visible={this.state.modalVisible}
        hardwareAccelerated={true}
        onRequestClose={this.onRequestClose}
        onDismiss={this.onDismiss}
        onShow={this.onShow}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              this.state.model !== 'default' && this.setModal();
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: VALUE.width,
              height: VALUE.height,
              backgroundColor:
                this.state.model === 'default' ? '#fff' : 'rgba(0, 0, 0, 0.7)'
            }}
          />
          <View
            style={{
              width: VALUE.width * 0.7,
              height: VALUE.height * 0.5,
              backgroundColor: '#fff',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              zIndex: 1
            }}
          >
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                this.setModal();
              }}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                zIndex: 2
              }}
            >
              <Icon name='close' size={30} color='#888' />
            </TouchableOpacity>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
              Hello World!
            </Text>
          </View>
        </View>
      </Modal>
    );
  };

  previewDemoOne = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {this.renderModal()}
        {MODAL_LIST.map((item, index) => {
          return (
            <View style={{ marginRight: 26 }} key={index}>
              <Button
                onPress={() => {
                  this.setModal(item);
                }}
                title={item.label}
              />
            </View>
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
        <Card html={COMPONENT_VALUE} codeHeight={1600}>
          {this.previewDemoOne()}
        </Card>
      </Package>
    );
  }
}

export default ModalInputPackage;
