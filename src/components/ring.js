import { StyleSheet } from 'react-native';
import React, { useContext, useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { AuthContext } from '../../context/AuthContext';
import colors from '../../assets/colors/colors';

const SIZE = 100;
const COLOR = '#6E01EF';

const Ring = ({ index }) => {
  const opacityValue = useSharedValue(0.7);
  const scaleValue = useSharedValue(1);
  const {colorScheme} = useContext(AuthContext);

  useEffect(() => {
    opacityValue.value = withDelay(
      index * 400,
      withRepeat(
        withTiming(0, {
          duration: 2000,
        }),
        -1,
        false,
      ),
    );
    scaleValue.value = withDelay(
      index * 400,
      withRepeat(
        withTiming(4, {
          duration: 2000,
        }),
        -1,
        false,
      ),
    );
  }, [opacityValue, scaleValue, index]);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scaleValue.value,
        },
      ],
      opacity: opacityValue.value,
    };
  });

  return <Animated.View style={[{
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: colors[colorScheme].ripple1,
    position: 'absolute',
  }, rStyle]} />;
};

const styles = StyleSheet.create({
  
  dot: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: COLOR,
    position: 'absolute',
  },
});

export default Ring;
