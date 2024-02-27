/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import LoginScreen from './components/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {RegisterScreen} from './components/RegisterScreen';
import {LOPDScreen} from './components/LOPDScreen';
import {RecoverPassScreen} from './components/RecoverPassScreen';
import ProjectListScreen from './components/ProjectListScreen';
import CustomerListScreen from './components/CustomerListScreen';
import CustomerDetailsScreen from './components/CustomerDetailsScreen';
import ProjectDetailsScreen from './components/ProjectDetailsScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  LOPDScreen: undefined;
  RegisterScreen: undefined;
  RecoverPassScreen: undefined;
  ProjectListScreen: undefined;
  ProjectDetailsScreen: {id: number};
  CustomerListScreen: undefined;
  CustomerDetailsScreen: {id: number};
};
const RootStack = createStackNavigator<RootStackParamList>();

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Proyectos" component={ProjectListScreen} />
//       <Drawer.Screen name="Clientes" component={ProjectListScreen} />
//     </Drawer.Navigator>
//   );
// }

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
          name="ProjectDetailsScreen"
          component={ProjectDetailsScreen}
          options={{title: 'Detalle del Proyecto'}}
        />
        <RootStack.Screen
          name="CustomerListScreen"
          component={CustomerListScreen}
          options={{title: 'Listado de Clientes'}}
        />
        <RootStack.Screen
          name="CustomerDetailsScreen"
          component={CustomerDetailsScreen}
          options={{title: 'Detalle del Cliente'}}
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
