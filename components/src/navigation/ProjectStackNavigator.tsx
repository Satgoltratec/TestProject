import {createStackNavigator} from '@react-navigation/stack';

import {ListProjects} from '../screens/projects';
import {DetailProjects} from '../screens/projects';

export type ProjectStackParamList = {
  ListProjects: undefined;
  DetailProjects: {id: number};
};

const RootStack = createStackNavigator<ProjectStackParamList>();

export const ProjectStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="ListProjects"
        component={ListProjects}
        options={{title: 'Listado de Proyectos', headerShown: false}}
      />
      <RootStack.Screen
        name="DetailProjects"
        component={DetailProjects}
        options={{title: 'Detalle del Proyecto'}}
      />
    </RootStack.Navigator>
  );
};
