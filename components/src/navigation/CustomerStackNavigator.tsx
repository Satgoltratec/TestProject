import {createStackNavigator} from '@react-navigation/stack';
import {CreateCustomers} from '../screens/customers';
import {ListCustomers} from '../screens/customers';
import {DetailCustomers} from '../screens/customers';

import {Button} from 'react-native';

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
          title: 'Listado de Clientes',

          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('CreateCustomers')}
              title="Crear"
            />
          ),
        })}
      />
      <RootStack.Screen
        name="DetailCustomers"
        component={DetailCustomers}
        options={{title: 'Detalle del Cliente'}}
      />

      <RootStack.Screen
        name="CreateCustomers"
        component={CreateCustomers}
        options={{title: 'Crear Cliente'}}
      />
    </RootStack.Navigator>
  );
};
