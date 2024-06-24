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

      {/* <Stack.Screen name={authRouts.verifyAccount} component={VerifyAccount} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
};
