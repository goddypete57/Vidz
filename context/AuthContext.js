import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme} from 'react-native';
import { StackActions } from '@react-navigation/native';

export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [stackType, setstackType] = useState(STACK_TYPE.MAIN);

  const [colorScheme, setColorScheme] = useState('dark');
  const appearance = useColorScheme();



  // const saveToken = token => {
  //   setIsLoading(true);
  //   setToken(token);
  //   AsyncStorage.setItem('token', token);
  //   setIsLoading(false);
  // };
  const saveUser = user => {
    setIsLoading(true);
    setUser(user);
    AsyncStorage.setItem('user', JSON.stringify(user));
    setIsLoading(false);
    // console.log("user",user)
  };


  const toggleStack = async (stackType) => {
    setstackType(stackType);
    AsyncStorage.setItem('stackType', stackType);
  }

  const getTheme = async () => {
    let theme = await AsyncStorage.getItem('theme');
    if (theme) {
      setColorScheme(theme);
    } else {
      setColorScheme(appearance);
      AsyncStorage.setItem('theme', appearance);
    }
  };
  const toggleTheme = async () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
    AsyncStorage.setItem('theme', colorScheme === 'dark' ? 'light' : 'dark');
  };
  useEffect(() => {
    setColorScheme(appearance);
    AsyncStorage.setItem('theme', appearance);
  }, [appearance]);

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let token = await AsyncStorage.getItem('token');
      let user = await AsyncStorage.getItem('user');
      let stack_type = await AsyncStorage.getItem('stackType')
      setToken(token);
      setUser(JSON.parse(user ?? '{}'));
      setIsLoading(false);
      setstackType(stack_type ?? STACK_TYPE.MAIN)
    } catch (error) {
      console.log('isLoggedIn error: $(error)');
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  });
  useEffect(() => {
    getTheme();
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        token,
        user,
        saveUser,
        colorScheme,
        toggleTheme,
        toggleStack,
        stackType
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const STACK_TYPE = {
  MAIN: 'MAIN',
  PROFILE: 'PROFILE',
}
