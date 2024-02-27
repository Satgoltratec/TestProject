import {View, SafeAreaView, Text, TextInput, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {customers} from './data/customers';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type CustomerListProps = NativeStackScreenProps<
  RootStackParamList,
  'CustomerListScreen'
>;

function CustomerListScreen({navigation}: CustomerListProps) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TextInput
        style={{
          height: 35,
          marginRight: 12,
          borderWidth: 1,
          backgroundColor: 'white',
          borderColor: '#f0f0f0',
          shadowColor: '#f6f6f6',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 4,
          padding: 5,
          borderRadius: 20,
          marginBottom: 10,
        }}
        placeholder="Buscar Cliente"
      />
      <ScrollView style={{padding: 7}}>
        {customers?.map((customer, index) => (
          <Pressable
            key={customer.id}
            onPress={() =>
              navigation.navigate('CustomerDetailsScreen', {id: customer.id})
            }>
            <View
              key={customer.id}
              style={{
                borderBottomWidth: 0.5,
                borderColor: '#e0e0e0',
                backgroundColor: index % 2 === 0 ? 'white' : '#f0f0f0',
              }}>
              <Text style={{fontSize: 15, padding: 8}}>{customer.name} </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default CustomerListScreen;
