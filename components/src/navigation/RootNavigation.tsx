import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext} from '../../context/AuthContext';
import {LOPDScreen} from '../screens/LOPDScreen';
import {GuestNavigation, LoggedInNavigator} from '.';

export type RootStackParamList = {
  LOPDScreen: undefined;
  GuestNavigation: undefined;
  LoggedInNavigator: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const {signedIn} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {signedIn ? (
          <>
            <RootStack.Screen
              name="LoggedInNavigator"
              component={LoggedInNavigator}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <RootStack.Screen
              name="GuestNavigation"
              component={GuestNavigation}
              options={{headerShown: false}}
            />
          </>
        )}
        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen name="LOPDScreen" component={LOPDScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
