import {createStackNavigator} from '@react-navigation/stack';

import {ListCustomers} from '../screens/customers';
import {DetailCustomers} from '../screens/customers';

export type CustomerStackParamList = {
  ListCustomers: undefined;
  DetailCustomers: {id: number};
};
export const CustomerStackNavigator = () => {
  const RootStack = createStackNavigator<CustomerStackParamList>();
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="ListCustomers"
        component={ListCustomers}
        options={{title: 'Listado de Clientes', headerShown: false}}
      />
      <RootStack.Screen
        name="DetailCustomers"
        component={DetailCustomers}
        options={{title: 'Detalle del Cliente'}}
      />
    </RootStack.Navigator>
  );
};
