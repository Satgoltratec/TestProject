import {createStackNavigator} from '@react-navigation/stack';

import {ListProjects} from '../screens/projects';
import {DetailProjects} from '../screens/projects';
import {CreateProjects} from '../screens/projects';
import {Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import {DrawerActions} from '@react-navigation/native';

export type ProjectStackParamList = {
  ListProjects: undefined;
  DetailProjects: {id: number};
  CreateProjects: undefined;
};

export const ProjectStackNavigator = () => {
  const RootStack = createStackNavigator<ProjectStackParamList>();
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="ListProjects"
        component={ListProjects}
        options={({navigation}) => ({
          title: 'Proyectos',

          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('CreateProjects')}
              title="Crear"
            />
          ),
          headerLeft: () => (
            <Button
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              title="DRAWER"
            />
          ),
        })}
      />
      <RootStack.Screen
        name="DetailProjects"
        component={DetailProjects}
        options={{title: 'Detalle del Proyecto'}}
      />
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen
          name="CreateProjects"
          component={CreateProjects}
          options={{title: 'Crear Proyecto'}}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
