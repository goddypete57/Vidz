import React, { useEffect, useContext, useState } from "react";
import { View, Text, StatusBar, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
// import Toast from 'react-native-toast-message'
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import colors from "./assets/colors/colors";
import MainStack from './src/navigations/stacks/MainStack'
import Splash from './src/screens/Splash'

const RootNavigator: React.FC = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Broken!</Text>
    </View>
  }
  const { token, } = authContext
  const [isLoading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => setLoading(false), 2000) });

  return (
    <NavigationContainer>
      {
        isLoading ? <Splash /> :
         <MainStack /> }
    </NavigationContainer>
  )
}
export default function App() {
  if (Platform.OS == 'ios') {
    StatusBar.setBarStyle('dark-content', false);	//<<--- add this
  }
  return (
    <>
    <View style={{flex:1,}}>

      <AuthContextProvider>
        <StatusBar backgroundColor={"#00FF00"} />
        <RootNavigator />
      </AuthContextProvider>
      {/* <Toast /> */}
    </View>
    </>
  );
}