import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import {GuestStackParamList} from '../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RecoverPassProps = NativeStackScreenProps<
  GuestStackParamList,
  'RecoverPassScreen'
>;

export function RecoverPassScreen({navigation}: RecoverPassProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>Correo</Text>
        <TextInput style={styles.textInput} placeholder="Introduzca Correo" />

        <Text>Contraseña</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Introduzca Contraseña"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Introduzca Contraseña de nuevo"
        />

        <View style={styles.btnContainer}>
          <Button title="Restablecer" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </SafeAreaView>

    // <SafeAreaView style={styles.container}>
    //   <View
    //     style={{
    //       flex: 1,
    //     }}>
    //     <View
    //       style={{
    //         flex: 1,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //       }}>
    //       <Text style={{padding: 7}}>Correo electronico</Text>
    //       <TextInput style={{borderWidth: 1}} placeholder="Introduzca Correo" />

    //       <Text style={{padding: 7}}>Escriba nueva Contraseña</Text>
    //       <TextInput
    //         style={{borderWidth: 1}}
    //         placeholder="Introduzca Contraseña"
    //       />
    //       <Text style={{padding: 7}}>Repita nueva Contraseña</Text>
    //       <TextInput style={{borderWidth: 1}} placeholder="escriba de nuevo" />
    //       <Button onPress={() => navigation.goBack()} title="Restablecer" />
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 300,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
  },

  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 25,
  },
  textRecoverPass: {
    height: 20,
    marginBottom: 1,
  },

  btnContainer: {
    backgroundColor: 'white',
    marginTop: 5,
  },
  bottomMenu: {
    backgroundColor: '#ffffff',
    height: 50,
    flexDirection: 'row',
  },
  itemBotton: {
    borderTopColor: '#d7d7d7',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
