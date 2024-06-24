import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Animated} from 'react-native';

const CustomSwitch = ({initialValue = false, onToggle}) => {
  const [isOn, setIsOn] = useState(initialValue);
  const togglePosition = new Animated.Value(initialValue ? 1 : 0);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);

    Animated.timing(togglePosition, {
      toValue: newValue ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();

    if (onToggle) {
      onToggle(newValue);
    }
  };

  const switchStyles = {
    transform: [
      {
        translateX: togglePosition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 28], // Adjust the range according to the switch size
        }),
      },
    ],
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handleToggle}
      style={{
        width: 60,
        height: 32,
        borderRadius: 16,
        backgroundColor: isOn ? 'rgba(0, 71, 0, 1)' : 'rgba(144, 152, 161, 1)',
       
        justifyContent: 'center',
      }}>
      <Animated.View style={[styles.switchToggle, switchStyles]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  switchToggle: {
    width: 24,
    height: 24,
    borderRadius: 24/2,
    margin:4,
    backgroundColor: 'white',
  },
});

export default CustomSwitch;
