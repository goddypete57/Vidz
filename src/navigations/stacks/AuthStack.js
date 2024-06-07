import 'react-native-gesture-handler';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import authRouts from '../routs/authRouts';

import ResetPassword from '../../screens/auth/ResetPassword';
import ForgotPassword from '../../screens/auth/ForgotPassword';
import Welcome from '../../screens/auth/Welcome';
import LoginScreen from '../../screens/auth/LoginScreen';
import OneLastStep from '../../screens/auth/OneLastStep';
import LoginOtp from '../../screens/auth/LoginOtp';
import FirstStep from '../../screens/auth/FirstStep';
import VerifyAccount from '../../screens/auth/VerifyAccount';
import FinishedStep from '../../screens/auth/FinishedStep';

const Stack = createNativeStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator>
    
      <Stack.Screen
        name={authRouts.Welcome}
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={authRouts.login}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={authRouts.signUp}
        component={OneLastStep}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={authRouts.forgotPassword}
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={authRouts.firstStep}
        component={FirstStep}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={authRouts.OneLastStep}
        component={OneLastStep}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={authRouts.VerifyOtp}
        component={VerifyAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={authRouts.ressetPassword}
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={authRouts.loginOtp}
        component={LoginOtp}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name={authRouts.finish}
        component={FinishedStep}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name={authRouts.verifyAccount} component={VerifyAccount} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
};
