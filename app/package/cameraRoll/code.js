export default {
  FIRST: `
   /*

   Android 权限配置：

     在 android/app/src/main/AndroidManifest.xml 加入
     &ltuses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/&gt
     &ltuses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/&gt

   */
   import React, { Component } from 'react';
   import {
     View,
     CameraRoll,
     Text,
     TouchableOpacity,
     Image,
     Alert
   } from 'react-native';
   import Toast from '../../widget/toast';
   import { authorization, generateLocalPath } from '../../common/utils';

   /**
    * @param {Function} authorization 授权函数 具体实现参见项目
    * @param {Function} generateLocalPath 生成本地文件路径 具体实现参见项目
    *
    * @class CameraRollPackage
    * @extends {Component}
    */
   class CameraRollPackage extends Component {
     constructor(props) {
       super(props);

       this.state = {
         loading: false
       };
     }

     MessageTips = (message, confirmCB = () =&gt {}, cancelCB = () =&gt {}) =&gt {
       Alert.alert(
         '提示',
         message,
         [
           {
             text: '取消',
             onPress: () =&gt cancelCB(),
             style: 'cancel'
           },
           { text: '确定', onPress: () =&gt confirmCB() }
         ],
         {
           cancelable: false
         }
       );
     };

     _saveToCameraRoll = item =&gt {
       this.MessageTips('确认保存图片到相册？', async () =&gt {
         try {
           const { code, tip } = await authorization(
             'WRITE_EXTERNAL_STORAGE',
             REJECTED_ALERT_AUTH
           );
           if (code === 1) {
             this.setState({ loading: true });
             const localFileUrl = await generateLocalPath(item.file, 'jpg');
             if (localFileUrl) {
               await CameraRoll.saveToCameraRoll(localFileUrl);
               return this.Toast.show('保存成功, 您可以到相册中查看');
             }
             return this.Toast.show('解析本地路径失败，保存图片失败');
           }
           return this.Toast.show(未授权无法保存图片到相册);
         } catch (error) {
           this.Toast.show('保存图片到相册异常');
           console.log('保存图片到相册异常', error);
         } finally {
           this.setState({ loading: false });
         }
       });
     };

     render() {
       return (
         &ltView&gt
           &ltView
             style={{
               flexDirection: 'row',
               flexWrap: 'wrap',
               justifyContent: 'center'
             }}
           &gt
             {CAMERAROLL_IMAGE_LIST.map((item, index) =&gt {
               return (
                 &ltTouchableOpacity
                   style={{ margin: 20 }}
                   key={index}
                   activeOpacity={0.2}
                   onLongPress={() =&gt {
                     this._saveToCameraRoll(item);
                   }}
                 &gt
                   &ltImage
                     source={{ uri: item.file }}
                     style={{ width: 90, height: 90 }}
                   /&gt
                 &lt/TouchableOpacity&gt
               );
             })}
             &ltText style={{ textAlign: 'center', padding: 10 }}&gt
               长按图片试试看...
             &lt/Text&gt
           &lt/View&gt
           &ltToast
             ref={toast =&gt {
               this.Toast = toast;
             }}
           /&gt
         &lt/View&gt
       );
     }
   }

   const CAMERAROLL_IMAGE_LIST = [
     {
       file: 'https://avatars0.githubusercontent.com/u/9892522?v=4'
     },
     {
       file: 'https://avatars1.githubusercontent.com/u/6128107?v=4'
     },
     {
       file: 'https://avatars0.githubusercontent.com/u/2918581?v=4'
     }
   ];

   const REJECTED_ALERT_AUTH = {
     title: '提醒',
     message:
       '由于您之前拒绝了我们对本机进行读写的权限，而此操作需要授权才能完成，现在授权？',
     buttonNeutral: '跳过',
     buttonNegative: '拒绝',
     buttonPositive: '同意'
   };

   export default CameraRollPackage;\n`,
  SECOND: `
   import React, { Component } from 'react';
   import { View, CameraRoll, Text, Image } from 'react-native';
   import Toast from '../../widget/toast';
   import { authorization } from '../../common/utils';

   class CameraRollPackage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         selectedList: [],
         loading: false
      };
   }

   _getPhotos = async (options = {}) =&gt {
      try {
         const { code, tip } = await authorization(
            'READ_EXTERNAL_STORAGE',
            REJECTED_ALERT_AUTH
         );
         if (code === 1) {
            this.setState({ loading: true });
            const { edges, page_info } = await CameraRoll.getPhotos(options);
            this.setState({ selectedList: edges });
            console.log(edges, page_info);
            return true;
         }
         return this.Toast.show(未授权无法读取图片);
      } catch (error) {
         this.Toast.show('读取图片异常');
         console.log(error, '读取图片异常');
      } finally {
         this.setState({ loading: false });
      }
   };

   _onOperate = item =&gt {
      this._getPhotos(item.value);
   };

   render() {
      return (
         &ltView&gt
         &ltView
            style={{
               flexDirection: 'row',
               flexWrap: 'wrap',
               justifyContent: 'center',
               margin: 10
            }}
         &gt
            {this.state.selectedList.map((item, index) =&gt {
               return (
               &ltImage
                  key={index}
                  source={{ uri: item.node.image.uri }}
                  style={{ width: 90, height: 90, margin: 10 }}
               /&gt
               );
            })}
            {!this.state.selectedList.length && (
               &ltText&gt尚未选择任何图片, 选几张试试&lt/Text&gt
            )}
         &lt/View&gt
         &ltView style={{ flexDirection: 'row', flexWrap: 'wrap' }}&gt
            {OPERATE_LIST.map((item, index) =&gt {
               return (
               &ltView style={{ margin: 10 }} key={index}&gt
                  &ltButton
                     title={item.label}
                     onPress={() =&gt {
                     this.onOperate(item);
                     }}
                     color='#409EFF'
                  /&gt
               &lt/View&gt
               );
            })}
         &lt/View&gt
         &ltToast
            ref={toast =&gt {
               this.Toast = toast;
            }}
         /&gt
         &lt/View&gt
      );
   }
   }

   const REJECTED_ALERT_AUTH = {
      title: '提醒',
      message:
         '由于您之前拒绝了我们对本机进行读写的权限，而此操作需要授权才能完成，现在授权？',
      buttonNeutral: '跳过',
      buttonNegative: '拒绝',
      buttonPositive: '同意'
   };

   const OPERATE_LIST = [
      {
         label: '选取图片',
         value: {
            first: 10,
            assetType: 'Photos'
         },
         type: 'getPhotos'
      }
   ];

   export default CameraRollPackage;\n`
};
