/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {useState} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from './components/LoginScreen';
import {RegisterScreen} from './components/RegisterScreen';
import {LOPDScreen} from './components/LOPDScreen';
import {RecoverPassScreen} from './components/RecoverPassScreen';
import ProjectListScreen from './components/ProjectListScreen';
import CustomerListScreen from './components/CustomerListScreen';
import CustomerDetailsScreen from './components/CustomerDetailsScreen';
import ProjectDetailsScreen from './components/ProjectDetailsScreen';
import HomeScreen from './components/HomeScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  LOPDScreen: undefined;
  RegisterScreen: undefined;
  RecoverPassScreen: undefined;
  ProjectListScreen: undefined;
  ProjectDetailsScreen: {id: number};
  CustomerListScreen: undefined;
  CustomerDetailsScreen: {id: number};
  Root: undefined;
};

// export type RootDrawerParamList = {

// }
const RootStack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();
// const Tab = createBottomTabNavigator<RootStackParamList>()();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Inicio'}}
      />

      <Drawer.Screen
        name="CustomerListScreen"
        component={CustomerListScreen}
        options={{title: 'Listado de Clientes'}}
      />
      <Drawer.Screen
        name="ProjectListScreen"
        component={ProjectListScreen}
        options={{title: 'Listado de Proyectos'}}
      />
    </Drawer.Navigator>
  );
}

function App(): React.JSX.Element {
  const [signedIn, setSignedIn] = useState<boolean>(true);
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="ProjectListScreen">
          {signedIn ? (
            <>
              <RootStack.Screen name="Root" component={Root} />

              <RootStack.Screen
                name="ProjectDetailsScreen"
                component={ProjectDetailsScreen}
                options={{title: 'Detalle del Proyecto'}}
              />

              <RootStack.Screen
                name="CustomerDetailsScreen"
                component={CustomerDetailsScreen}
                options={{title: 'Detalle del Cliente'}}
              />
            </>
          ) : (
            <>
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
            </>
          )}
          <RootStack.Group screenOptions={{presentation: 'modal'}}>
            <RootStack.Screen name="LOPDScreen" component={LOPDScreen} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
