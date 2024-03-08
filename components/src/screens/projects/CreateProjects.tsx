import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {ProjectStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type CreateProjectsProps = NativeStackScreenProps<
  ProjectStackParamList,
  'CreateProjects'
>;

export const CreateProjects = ({navigation, route}: CreateProjectsProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        enabled
        keyboardVerticalOffset={150}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.inner}>
              <Text>Cliente</Text>
              <TextInput
                placeholder="Introduzca Cliente"
                style={styles.textInput}
              />
              <Text>Título</Text>
              <TextInput
                placeholder="Introduzca Tílulo"
                style={styles.textInput}
              />
              <Text>Importe</Text>
              <TextInput
                placeholder="Introduzca Importe"
                style={styles.textInput}
              />
              <Text>Importe</Text>
              <TextInput
                placeholder="Introduzca Importe"
                style={styles.textInput}
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
    padding: 24,
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
