import {createStackNavigator} from '@react-navigation/stack';
import {CreateCustomers} from '../screens/customers';
import {ListCustomers} from '../screens/customers';
import {DetailCustomers} from '../screens/customers';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';
import {Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

export type CustomerStackParamList = {
  ListCustomers: undefined;
  DetailCustomers: {id: number};
  CreateCustomers: undefined;
};
export const CustomerStackNavigator = () => {
  const RootStack = createStackNavigator<CustomerStackParamList>();
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="ListCustomers"
        component={ListCustomers}
        options={({navigation}) => ({
          title: 'Clientes',

          headerRight: () => (
            <Icon
              name="plus"
              style={{marginRight: 10}}
              size={23}
              onPress={() => navigation.navigate('CreateCustomers')}
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
        name="DetailCustomers"
        component={DetailCustomers}
        options={{title: 'Detalle del Cliente'}}
      />
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen
          name="CreateCustomers"
          component={CreateCustomers}
          options={{title: 'Crear Cliente'}}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
