import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {RootStackParamList} from '../App';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RecoverPassProps = NativeStackScreenProps<
  RootStackParamList,
  'RecoverPassScreen'
>;

export function RecoverPassScreen({navigation}: RecoverPassProps) {
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

          <Text style={{padding: 7}}>Escriba nueva Contraseña</Text>
          <TextInput
            style={{borderWidth: 1}}
            placeholder="Introduzca Contraseña"
          />
          <Text style={{padding: 7}}>Repita nueva Contraseña</Text>
          <TextInput style={{borderWidth: 1}} placeholder="escriba de nuevo" />
        </View>

        <View style={styles.bottomMenu}>
          {/* Barra Inferior */}
          {/* 
          <Pressable
            style={styles.itemBotton}
            onPress={() => navigation.navigate('LOPDScreen')}>
            <View>
              <Text>LOPD</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.itemBotton}
            onPress={() => navigation.navigate('LoginScreen')}>
            <View>
              <Text>Login</Text>
            </View>
          </Pressable> */}
        </View>
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
