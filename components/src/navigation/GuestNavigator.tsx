import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {RecoverPassScreen} from '../screens/RecoverPassScreen';

export type GuestStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  RecoverPassScreen: undefined;
  LOPDScreen: undefined;
};

const RootStack = createStackNavigator<GuestStackParamList>();

export const GuestNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'Inicio de sesión'}}
      />
      <RootStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{title: 'Registro'}}
      />
      <RootStack.Screen
        name="RecoverPassScreen"
        component={RecoverPassScreen}
        options={{title: 'Restablecer Contraseña'}}
      />
    </RootStack.Navigator>
  );
};
