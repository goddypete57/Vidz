/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {useRef, useEffect, useState, useContext} from 'react';
import {StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CreatePin from '../../screens/profile/CreatePin';
import profileRouts from '../routs/profileRouts';
import Profile from '../../screens/profile/Profile';
import userAccount from '../../screens/profile/userAccount';
import ListOfVideo from '../../screens/profile/ListOfVideo';
import setting from '../../screens/profile/setting';
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

      <Stack.Screen
        name={profileRouts.listOfVideo}
        component={ListOfVideo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={profileRouts.Settings}
        component={setting}
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
