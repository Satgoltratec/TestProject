import React, {useContext, useState} from 'react';

import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';

import LoginScreen from './LoginScreen';
import {RegisterScreen} from './RegisterScreen';
import {LOPDScreen} from './LOPDScreen';
import {RecoverPassScreen} from './RecoverPassScreen';
import ProjectListScreen from './ProjectListScreen';
import CustomerListScreen from './CustomerListScreen';
import CustomerDetailsScreen from './CustomerDetailsScreen';
import ProjectDetailsScreen from './ProjectDetailsScreen';
import HomeScreen from './HomeScreen';

import {AuthContext} from './context/AuthContext';
import {Text, View} from 'react-native';

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
  Logout: undefined;
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

function CustomDrawerContent(props: any) {
  const {logout} = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text>Aqui va el nombre del usuario</Text>
      </View>
      <DrawerItemList {...props} />

      <DrawerItem label="Salir" onPress={logout}></DrawerItem>
    </DrawerContentScrollView>
  );
}
function Drawer() {
  return (
    <RootDrawer.Navigator drawerContent={CustomDrawerContent}>
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
function MainNavigation() {
  // const [signedIn, setSignedIn] = useState<boolean>(false);
  const {signedIn} = useContext(AuthContext);

  return (
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
  );
}

export default MainNavigation;
