import React, {useContext} from 'react';
import {AuthContext, useAuthContext} from './context/AuthContext';
import {SafeAreaView, View} from 'react-native';
import {RootStackParamList} from './MainNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type LogoutScreenProps = NativeStackScreenProps<RootStackParamList, 'Logout'>;
function Logout({navigation}: LogoutScreenProps) {
  const {signedIn, logout} = useAuthContext();

  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
        }}></View>
    </SafeAreaView>
  );
}

export default Logout;
