import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {AuthContext} from '../../context/AuthContext';
import {HomeScreen} from '../screens/HomeScreen';
import {CustomerStackNavigator, ProjectStackNavigator} from '.';

export type LoggedInStackParamList = {
  HomeScreen: undefined;

  ProjectListScreen: undefined;
  ProjectDetailsScreen: {id: number};

  CustomerStackNavigator: undefined;
  ProjectStackNavigator: undefined;
};

const RootDrawer = createDrawerNavigator<LoggedInStackParamList>();

function CustomDrawerContent(props: any) {
  const {logout} = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View style={{padding: 20}}>
        <Text>Aqui va el nombre del usuario</Text>
      </View>
      <DrawerItemList {...props} />

      <DrawerItem label="Salir" onPress={logout}></DrawerItem>
    </DrawerContentScrollView>
  );
}
export const LoggedInNavigator = () => {
  return (
    <RootDrawer.Navigator drawerContent={CustomDrawerContent}>
      <RootDrawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Inicio'}}
      />
      <RootDrawer.Screen
        name="CustomerStackNavigator"
        component={CustomerStackNavigator}
        options={{title: 'Clientes'}}
      />
      <RootDrawer.Screen
        name="ProjectStackNavigator"
        component={ProjectStackNavigator}
        options={{title: 'Proyectos'}}
      />
    </RootDrawer.Navigator>
  );
};
