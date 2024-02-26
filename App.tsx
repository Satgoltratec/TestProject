/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import LoginScreen from './components/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {RegisterScreen} from './components/RegisterScreen';
import {LOPDScreen} from './components/LOPDScreen';
import {RecoverPassScreen} from './components/RecoverPassScreen';
import ProjectListScreen from './components/ProjectListScreen';
import CustomerListScreen from './components/CustomerListScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  LOPDScreen: undefined;
  RegisterScreen: undefined;
  RecoverPassScreen: undefined;
  ProjectListScreen: undefined;
  CustomerListScreen: undefined;
};
const RootStack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="ProjectListScreen">
        <RootStack.Screen
          name="ProjectListScreen"
          component={ProjectListScreen}
          options={{title: 'Listado de Proyectos'}}
        />
        <RootStack.Screen
          name="CustomerListScreen"
          component={CustomerListScreen}
          options={{title: 'Listado de Clientes'}}
        />
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

        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen name="LOPDScreen" component={LOPDScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
