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
import FindVideo from '../../screens/findVideo/FindVideo';
import Profile from '../../screens/profile/Profile';

const Stack = createNativeStackNavigator();

const profilePass = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name={ProfileRoute.Profile}
        component={Profile}
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
