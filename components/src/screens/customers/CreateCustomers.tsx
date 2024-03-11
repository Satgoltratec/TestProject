import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {CustomerStackParamList} from '../../navigation';
import {ScrollView} from 'react-native-gesture-handler';

type CreateCustomersProps = NativeStackScreenProps<
  CustomerStackParamList,
  'CreateCustomers'
>;

export const CreateCustomers = ({navigation, route}: CreateCustomersProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={160}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.inner}>
              <Text>Nombre</Text>
              <TextInput
                placeholder="Introduzca nombre"
                style={styles.textInput}
              />
              <Text>DNI</Text>
              <TextInput
                placeholder="Introduzca DNI"
                style={styles.textInput}
              />
              <Text>Dirección</Text>
              <TextInput
                placeholder="Introduzca Dirección"
                style={styles.textInput}
              />
              <Text>Código Postal</Text>
              <TextInput
                placeholder="Introduzca Código Postal"
                style={styles.textInput}
              />
              <Text>Localidad</Text>
              <TextInput
                placeholder="Introduzca Localidad"
                style={styles.textInput}
              />
              <Text>Provincia</Text>
              <TextInput
                placeholder="Introduzca Provincia"
                style={styles.textInput}
              />
              <Text>País</Text>
              <TextInput
                placeholder="Introduzca País"
                style={styles.textInput}
              />
              <Text>Teléfono</Text>
              <TextInput
                placeholder="Introduzca Teléfono"
                style={styles.textInput}
                keyboardType="numeric"
              />

              <View style={styles.btnContainer}>
                <Button title="Crear" onPress={() => null} />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

{
  /* <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        keyboardVerticalOffset={Platform.select({ios: 180, android: 230})}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          sadfdsf
        </TouchableWithoutFeedback>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView> */
}
