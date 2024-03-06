import {View, SafeAreaView, Text, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {customers} from '../../../data/customers';
import {CustomerStackParamList} from '../../navigation';

type DetailCustomersProps = NativeStackScreenProps<
  CustomerStackParamList,
  'DetailCustomers'
>;

export const DetailCustomers = ({navigation, route}: DetailCustomersProps) => {
  const data = customers.find(customer => customer.id === route.params.id);
  return (
    <SafeAreaView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={{padding: 3, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Nombre: </Text>
            <Text>{data?.name}</Text>
          </View>
          <View style={{padding: 3, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>DNI: </Text>
            <Text>{data?.dni}</Text>
          </View>
          <View style={{padding: 3, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Dirección: </Text>
            <Text>{data?.address}</Text>
          </View>
          <View style={{padding: 3, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Código Postal: </Text>
            <Text>{data?.postcode}</Text>
          </View>
          <View style={{padding: 3, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Localidad: </Text>
            <Text>{data?.locality}</Text>
          </View>
          <View style={{padding: 3, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Provincia: </Text>
            <Text>{data?.province}</Text>
          </View>
          <View style={{padding: 3, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Pais: </Text>
            <Text>{data?.country}</Text>
          </View>
          <View style={{padding: 3, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Teléfono: </Text>
            <Text>{data?.telephone1}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};
