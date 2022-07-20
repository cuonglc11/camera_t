import React, { useEffect, useMemo, useRef ,useDeferredValue , useState} from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import {
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const clamp = (value, lowerBound, upperBound) => {
  'worklet';
  return Math.min(Math.max(lowerBound, value), upperBound);
};

function Taps(props) {
  const {
    x,
    y,
    limitationHeight,
    limitationWidth,
    onDragEnd,
    children,
    style,
  } = props;
  
  const xRef = useRef(x);
  const yRef = useRef(y);
  const boxX = useSharedValue(0);
  const boxY = useSharedValue(0);

  useEffect(() => {
    boxX.value = withTiming(xRef.current);
    boxY.value = withTiming(yRef.current);
  }, [boxX, boxY]);
  //  console.log(boxX.value , "cuss");

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_ev, ctx) => {
      ctx.offsetX = boxX.value;
      ctx.offsetY = boxY.value;
    },
    onActive: (ev, ctx) => {
      boxX.value = clamp(
        ctx.offsetX + ev.translationX,
        0,
        limitationWidth-15,
      );
      boxY.value = clamp(
        ctx.offsetY + ev.translationY,
        0,
        limitationHeight-15 ,
      );
      if (onDragEnd) {
        runOnJS(onDragEnd)({
          x: boxX.value,
          y: boxY.value,
          show : true
        });
      }
    },
    onFinish: () => {
      if (onDragEnd) {
        runOnJS(onDragEnd)({
          x: boxX.value,
          y: boxY.value,
          show : false
        });
      }
    },
  });
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: boxX.value,
      },
      {
        translateY: boxY.value,
      },
    ],
    position: 'absolute',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
  }));

  const styles = useMemo(
    () =>
      StyleSheet.create({
        closeBoxStyle: {
          position: 'absolute',
          zIndex: 20,
          elevation: 20,
          right: -5,
          top: 0,
        },
        rotateBoxStyle: {
          position: 'absolute',
          zIndex: 20,
          elevation: 20,
          left: -10,
          top: -10,
        },
        resizeBoxStyle: {
          position: 'absolute',
          zIndex: 20,
          elevation: 20,
          right: -10,
          bottom: -10,
          transform: [{ scale: 1 }],
        },
        imageStyle: {
          height: 20,
          width: 20,
        },
      }),
    [],
  );
  return (
    <>
        <PanGestureHandler  onGestureEvent={gestureHandler} hitSlop={{left:10,right:10,top:10,bottom:10}} >
          <Animated.View style={[animatedStyle, style]} >
            {children}

          </Animated.View>
        </PanGestureHandler>
    </>
  );
}
const styless = StyleSheet.create({
  viewContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    flex: 1,
    backgroundColor: 'red',
  },
  eachViewContainer: {
    position: 'relative',
  },
  rotation: {
    position: 'absolute',
    top: -10,
    right: -5,
    zIndex: 10,
    elevation: 10,
  },
  close: {
    position: 'absolute',
    top: -10,
    right: -5,
    zIndex: 10,
    elevation: 10,
  },
});

export default Taps;