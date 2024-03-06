import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import {RootStackParamList} from './MainNavigation';

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
          <Button onPress={() => navigation.goBack()} title="Restablecer" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
