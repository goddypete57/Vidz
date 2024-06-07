import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme} from 'react-native';

export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);


  const [colorScheme, setColorScheme] = useState('dark');
  const [isOnboarded, setIsOnboarded] = useState(false);
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

  
  const onboard = () => {
    setIsOnboarded(true);
    AsyncStorage.setItem('onboarded', 'true');
  };

  const logout = () => {
    setIsLoading(true);
    setToken(null);
    AsyncStorage.removeItem('token');
    setIsLoading(false);
  };

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
     
      setIsOnboarded(onboarded === 'true' ? true : false);
      setToken(token);
      setUser(JSON.parse(user ?? '{}'));
      setLoaction(location);
      setIsLoading(false);
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
        // login,
        logout,
        isLoading,
        token,
        user,
        saveUser,
        // saveToken,
        colorScheme,
        isOnboarded,
        onboard,
        toggleTheme,
        // saveLatAndLong,
        // loaction
      }}>
      {children}
    </AuthContext.Provider>
  );
};
