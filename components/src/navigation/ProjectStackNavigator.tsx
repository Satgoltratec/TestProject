import {createStackNavigator} from '@react-navigation/stack';

import {ListProjects} from '../screens/projects';
import {DetailProjects} from '../screens/projects';
import {CreateProjects} from '../screens/projects';
import {Button} from 'react-native';

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
          title: 'Listado de Proyectos',

          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('CreateProjects')}
              title="Crear"
            />
          ),
        })}
      />
      <RootStack.Screen
        name="DetailProjects"
        component={DetailProjects}
        options={{title: 'Detalle del Proyecto'}}
      />
      <RootStack.Screen
        name="CreateProjects"
        component={CreateProjects}
        options={{title: 'Crear Proyecto'}}
      />
    </RootStack.Navigator>
  );
};
