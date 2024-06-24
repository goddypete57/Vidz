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

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CreatePin from '../../screens/profile/CreatePin';
import profileRouts from '../routs/profileRouts';
import Profile from '../../screens/profile/Profile';
import userAccount from '../../screens/profile/userAccount';
const Stack = createNativeStackNavigator();

export default ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name={profileRouts.Profile}
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={profileRouts.createPin}
        component={CreatePin}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={profileRouts.userAccount}
        component={userAccount}
        options={{headerShown: false}}
      />


    </Stack.Navigator>
  );
};

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
