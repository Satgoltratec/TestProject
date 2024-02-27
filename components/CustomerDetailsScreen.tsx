import {View, SafeAreaView, Text, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {RootStackParamList} from '../App';
import {customers} from './data/customers';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type CustomerScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CustomerDetailsScreen'
>;

function CustomerDetailsScreen({navigation, route}: CustomerScreenProps) {
  const data = customers.find(customer => customer.id === route.params.id);
  // const house = data && data.find(house => house.id === route.params.id);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{padding: 7}}>
        <Text>{JSON.stringify(data, null, 2)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CustomerDetailsScreen;
