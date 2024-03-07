import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CustomerStackParamList} from '../../navigation';

type CreateCustomersProps = NativeStackScreenProps<
  CustomerStackParamList,
  'CreateCustomers'
>;

export const CreateCustomers = ({navigation, route}: CreateCustomersProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{padding: 7}}>Nombre</Text>
          <TextInput style={{borderWidth: 1}} placeholder="Introduzca nombre" />
          <Text style={{padding: 7}}>DNI</Text>
          <TextInput style={{borderWidth: 1}} placeholder="Introduzca DNI" />
          <Text style={{padding: 7}}>Dirección</Text>
          <TextInput
            style={{borderWidth: 1}}
            placeholder="Introduzca dirección"
          />
          <Text style={{padding: 7}}>Código Postal</Text>
          <TextInput
            style={{borderWidth: 1}}
            placeholder="Escriba código postal"
          />
          <Text style={{padding: 7}}>Localidad</Text>
          <TextInput style={{borderWidth: 1}} placeholder="Escriba localidad" />
          <Text style={{padding: 7}}>Provincia</Text>
          <TextInput style={{borderWidth: 1}} placeholder="Escriba provincia" />
          <Text style={{padding: 7}}>Pais</Text>
          <TextInput style={{borderWidth: 1}} placeholder="Escriba pais" />
          <Text style={{padding: 7}}>Teléfono</Text>
          <TextInput style={{borderWidth: 1}} placeholder="Escriba telefono" />
          <Button title="Aceptar" />
        </View>

        <View style={styles.bottomMenu}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    height: 50,
  },
  items: {
    flexDirection: 'row', // Items horizontalmente
    height: 50,
    backgroundColor: 'tomato',
    borderBottomColor: '#f9f9f9',
  },
  itemsBotton: {
    flexDirection: 'row', // Items horizontalmente
    height: 50,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  itemBotton: {
    borderTopColor: '#d7d7d7',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },

  scrollViewContent: {
    backgroundColor: '#ffffff',
  },
  bottomMenu: {
    backgroundColor: '#ffffff',
    height: 50,
    flexDirection: 'row',
  },
  buttonMap: {
    position: 'absolute',
    bottom: 74,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    elevation: 3,
    width: 120,
    left: '50%',
    marginLeft: -60,
    alignItems: 'center',
  },
  textButton: {
    fontSize: 15,
    lineHeight: 21,
    paddingVertical: 12,
    fontWeight: 'bold',

    color: 'white',
  },
});
