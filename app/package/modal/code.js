export default `
  import React, { Component } from 'react';
  import { Text, View, Modal, Button, TouchableOpacity } from 'react-native';
  import Icon from 'react-native-vector-icons/AntDesign';
  import { VALUE } from '../../common/constance';

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
    setModal = item =&gt {
      if (item) {
        this.setState({ model: item.value });
      }
      this.setState({ modalVisible: Boolean(item) });
    };

    onRequestClose = () =&gt {
      console.log(
        'Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件。'
      );
    };

    onDismiss = () =&gt {
      console.log('modal 关闭');
    };

    onShow = () =&gt {
      console.log('modal 打开');
    };

    renderModal = () =&gt {
      return (
        &ltModal
          animationType={this.state.model === 'default' ? 'slide' : 'fade'}
          transparent={true}
          visible={this.state.modalVisible}
          hardwareAccelerated={true}
          onRequestClose={this.onRequestClose}
          onDismiss={this.onDismiss}
          onShow={this.onShow}
        &gt
          &ltView
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1
            }}
          &gt
            &ltTouchableOpacity
              activeOpacity={1}
              onPress={() =&gt {
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
            /&gt
            &ltView
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
            &gt
              &ltTouchableOpacity
                activeOpacity={0.6}
                onPress={() =&gt {
                  this.setModal();
                }}
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  zIndex: 2
                }}
              &gt
                &ltIcon name='close' size={30} color='#888' /&gt
              &lt/TouchableOpacity&gt
              &ltText style={{ fontSize: 40, fontWeight: 'bold' }}&gt
                Hello World!
              &lt/Text&gt
            &lt/View&gt
          &lt/View&gt
        &lt/Modal&gt
      );
    };

    render() {
      return (
        &ltView style={{ flexDirection: 'row' }}&gt
          {this.renderModal()}
          {MODAL_LIST.map((item, index) =&gt {
            return (
              &ltView style={{ marginRight: 26 }} key={index}&gt
                &ltButton
                  onPress={() =&gt {
                    this.setModal(item);
                  }}
                  title={item.label}
                /&gt
              &lt/View&gt
            );
          })}
        &lt/View&gt
      );
    }
  }

  export default ModalInputPackage;\n`;
