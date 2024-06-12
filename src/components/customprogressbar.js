import React, {useContext, useState, useEffect} from 'react';
import {View, Animated} from 'react-native'; // Assuming you're using React Native
import {AuthContext} from '../../context/AuthContext';
import colors from '../../assets/colors/colors';

const CustomProgressBar = ({
  progress,
  height = 6,
  borderRadius = 23,
  marginTop = 6,
  animationDuration = 300,
}) => {
  const {colorScheme} = useContext(AuthContext);
  const progressBarColor = colors[colorScheme].pullup; // Assuming 'pullup' is a valid color property

  const [animatedProgress, setAnimatedProgress] = useState(
    new Animated.Value(progress), // Set initial value based on progress
  );
  useEffect(() => {
    // Update animatedProgress here when progress changes
    setAnimatedProgress(new Animated.Value(progress));

    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: animationDuration,
      useNativeDriver: true, // Optimize for better performance (optional)
    }).start();
  }, [progress]); // Re-run useEffect when progress changes
  console.log(progress, animatedProgress);

  const widthInterpolated = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
  });

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: progressBarColor,
        height,
        borderRadius,
        marginTop,

        overflow: 'hidden',
      }}>
      <Animated.View
        style={{
            transform: [{ scaleX: widthInterpolated }],
            backgroundColor: progressBarColor,
            height: '100%',
            width: '100%',
            transformOrigin: 'left center',
        }}
      />
    </View>
  );
};

export default CustomProgressBar;
