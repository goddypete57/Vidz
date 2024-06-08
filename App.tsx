import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Platform,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import Toast from 'react-native-toast-message'
import {AuthContext, AuthContextProvider} from './context/AuthContext';
import colors from './assets/colors/colors';
import MainStack from './src/navigations/stacks/MainStack';
import Splash from './src/screens/Splash';
const {width, height} = Dimensions.get('window');


const RootNavigator: React.FC = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Broken!</Text>
      </View>
    );
  }
  const {token} = authContext;
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  return (
    <NavigationContainer>
      {isLoading ? <Splash /> : <MainStack />}
    </NavigationContainer>
  );
};
export default function App() {

  return (
    <>
            <Image
          style={styles.background}
          source={require('./assets/images/background.png')}
          resizeMode="contain"
        />
   
        <AuthContextProvider>
          <StatusBar barStyle="light-content" translucent={true}  />
          <RootNavigator />
        </AuthContextProvider>
        {/* <Toast /> */}
   
    </>
  );
}
const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    zIndex: -20,
    position: 'absolute',
  },
});
