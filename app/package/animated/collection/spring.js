import { Animated } from 'react-native';

/**
 * Animated.spring(value, config)
 *
 * @param {Object} config 配置对象
 *
 * @param {Number}  config.bounciness                   控制弹性。默认8
 * @param {Number}  config.speed                        控制动画的速度。默认12
 *
 * @param {Number}  config.friction                     控制 反弹力/过冲。默认7
 * @param {Number}  config.tension                      控制速度。默认40
 *
 * @param {Number}  config.stiffness                    弹簧刚度系数。默认100
 * @param {Number}  config.damping                      定义了由于摩擦力如何阻尼弹簧的运动。默认10
 * @param {Number}  config.mass                         物体的质量附着在弹簧的末端。默认1
 *
 * @param {Number}  config.velocity                     附着在弹簧上的物体的初始速度。默认值为0（对象处于静止状态）
 * @param {Boolean} config.overshootClamping            表示弹簧是否应夹紧而不是弹跳。默认为false
 * @param {Number}  config.restDisplacementThreshold    静止位移的阈值，低于该阈值时应考虑弹簧处于静止状态。默认值为0.001
 * @param {Number}  config.restSpeedThreshold           静止时应考虑弹簧的速度，以每秒像素为单位。默认值为0.00
 * @param {Number}  config.delay                        延迟（毫秒）后启动动画。默认值为0
 * @param {Number}  config.isInteraction                指定本动画是否在InteractionManager的队列中注册以影响其任务调度。默认值为 true
 * @param {Number}  config.useNativeDriver              启用原生动画驱动。默认不启用(false)。
 */
const bounceIn = (value, toValue, options = {}) => {
  // 弹性模型
  Animated.spring(
    new Animated.Value(value || 0), // 动画中的变量值
    {
      toValue: toValue,
      bounciness: 8,
      speed: 12,
      ...options
    }
  ).start(); // 开始执行动画
};

export default {
  bounceIn
};
