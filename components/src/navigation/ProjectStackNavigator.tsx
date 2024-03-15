import {createStackNavigator} from '@react-navigation/stack';

import {ListProjects} from '../screens/projects';
import {DetailProjects} from '../screens/projects';
import {CreateProjects} from '../screens/projects';
import {Button} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
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
            <Icon
              name="plus"
              style={{marginRight: 10}}
              size={23}
              onPress={() => navigation.navigate('CreateProjects')}
            />
          ),

          headerLeft: () => (
            <Icon
              style={{marginLeft: 10}}
              name="three-bars"
              size={23}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
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
