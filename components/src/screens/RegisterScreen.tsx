import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
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
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.select({ios: 160})}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text>Correo</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Introduzca Correo"
            />
            <Text>Usuario</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Introduzca Usuario"
            />
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
              <Button title="Registrarse" onPress={() => navigation.goBack()} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
