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
  CustomerStack: undefined;
  ProjectStack: undefined;
  Drawer: undefined;
  Guest: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootDrawer = createDrawerNavigator<RootStackParamList>();

function CustomerStack() {
  return (
    <RootStack.Navigator initialRouteName="CustomerListScreen">
      <RootStack.Screen
        name="CustomerListScreen"
        component={CustomerListScreen}
        options={{title: 'Listado de Clientes', headerShown: false}}
      />
      <RootStack.Screen
        name="CustomerDetailsScreen"
        component={CustomerDetailsScreen}
        options={{title: 'Detalle del Cliente'}}
      />
    </RootStack.Navigator>
  );
}
function ProjectStack() {
  return (
    <RootStack.Navigator initialRouteName="ProjectListScreen">
      <RootStack.Screen
        name="ProjectListScreen"
        component={ProjectListScreen}
        options={{title: 'Listado de Proyectos', headerShown: false}}
      />
      <RootStack.Screen
        name="ProjectDetailsScreen"
        component={ProjectDetailsScreen}
        options={{title: 'Detalle del Proyecto'}}
      />
    </RootStack.Navigator>
  );
}
function Drawer() {
  return (
    <RootDrawer.Navigator>
      <RootDrawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Inicio'}}
      />
      <RootDrawer.Screen
        name="CustomerStack"
        component={CustomerStack}
        options={{title: 'Listado de Clientes'}}
      />
      <RootDrawer.Screen
        name="ProjectStack"
        component={ProjectStack}
        options={{title: 'Listado de Proyectos'}}
      />
    </RootDrawer.Navigator>
  );
}

function Guest() {
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
}

function App(): React.JSX.Element {
  const [signedIn, setSignedIn] = useState<boolean>(true);
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator>
          {signedIn ? (
            <>
              <RootStack.Screen
                name="Drawer"
                component={Drawer}
                options={{headerShown: false}}
              />
            </>
          ) : (
            <>
              <RootStack.Screen
                name="Guest"
                component={Guest}
                options={{headerShown: false}}
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
