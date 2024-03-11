import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from 'react-native';
import {useState, useContext} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import React from 'react';
import {AuthContext} from '../../context/AuthContext';
import {GuestStackParamList} from '../navigation';
import {LOPDScreen} from './LOPDScreen';

type LoginScreenProps = NativeStackScreenProps<
  GuestStackParamList,
  'LoginScreen'
>;

export function LoginScreen({navigation}: LoginScreenProps) {
  const {signedIn, login} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>Usuario</Text>
        <TextInput style={styles.textInput} />
        <Text>Contraseña</Text>
        <TextInput style={styles.textInput} secureTextEntry={true} />
        <View style={{alignItems: 'flex-end'}}>
          <Pressable onPress={() => navigation.navigate('RecoverPassScreen')}>
            <Text style={styles.textRecoverPass}>Recuperar contraseña </Text>
          </Pressable>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Entrar"
            onPress={() => login('miusuario', 'micontraseña')}
          />
        </View>
      </View>
      <View style={styles.bottomMenu}>
        {/* Barra Inferior */}

        <Pressable
          style={styles.itemBotton}
          onPress={() => navigation.navigate('LOPDScreen')}>
          <View>
            <Text>LOPD</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.itemBotton}
          onPress={() => navigation.navigate('RegisterScreen')}>
          <View>
            <Text>Registrarse</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default LoginScreen;
