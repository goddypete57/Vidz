/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {useRef, useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
  Platform,
} from 'react-native';
import mainRouts from '../routs/mainRouts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home/Home';
import Search from '../../screens/search/Search';
import VideodetailScreen from '../../screens/search/VideodetailScreen';
import videoPlayer from '../../screens/search/videoPlayer';

const Stack = createNativeStackNavigator();

const AuthPassed = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {},
      }}>
      <Stack.Screen
        name={mainRouts.home}
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={mainRouts.Search}
        component={Search}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={mainRouts.VideoDtail}
        component={VideodetailScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={mainRouts.VideoPlayer}
        component={videoPlayer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthPassed;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    alignItems: 'center',
  },
  indicator: {},
});
