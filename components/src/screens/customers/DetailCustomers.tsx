import {View, SafeAreaView, Text, TextInput, StyleSheet} from 'react-native';
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
          <View style={styles.inner}>
            <Text style={styles.title}>Nombre </Text>
            <Text style={styles.text}>{data?.name}</Text>
            <Text style={styles.title}>DNI </Text>
            <Text style={styles.text}>{data?.dni}</Text>
            <Text style={styles.title}>Dirección </Text>
            <Text style={styles.text}>{data?.address}</Text>
            <Text style={styles.title}>Código Postal </Text>
            <Text style={styles.text}>{data?.postcode}</Text>
            <Text style={styles.title}>Localidad </Text>
            <Text style={styles.text}>{data?.postcode}</Text>
            <Text style={styles.title}>Provincia </Text>
            <Text style={styles.text}>{data?.province}</Text>
            <Text style={styles.title}>País </Text>
            <Text style={styles.text}>{data?.country}</Text>
            <Text style={styles.title}>Teléfono </Text>
            <Text style={styles.text}>{data?.telephone1}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    height: 35,
    marginBottom: 5,
  },
});
