import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import {GuestStackParamList} from '../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RegisterProps = NativeStackScreenProps<
  GuestStackParamList,
  'RegisterScreen'
>;

export function RegisterScreen({navigation}: RegisterProps) {
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
          <Text style={{padding: 7}}>Correo electronico</Text>
          <TextInput style={{borderWidth: 1}} placeholder="Introduzca Correo" />
          <Text style={{padding: 7}}>Usuario</Text>
          <TextInput
            style={{borderWidth: 1}}
            placeholder="Introduzca Usuario"
          />
          <Text style={{padding: 7}}>Contraseña</Text>
          <TextInput
            style={{borderWidth: 1}}
            placeholder="Introduzca Contraseña"
          />
          <Text style={{padding: 7}}>Repita Contraseña</Text>
          <TextInput style={{borderWidth: 1}} placeholder="escriba de nuevo" />
          <Button onPress={() => navigation.goBack()} title="Aceptar" />
        </View>

        <View style={styles.bottomMenu}></View>
      </View>
    </SafeAreaView>
  );
}

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