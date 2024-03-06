import {SafeAreaView, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {LoggedInStackParamList} from '../navigation';

type HomeScreenProps = NativeStackScreenProps<
  LoggedInStackParamList,
  'HomeScreen'
>;

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
        }}></View>
    </SafeAreaView>
  );
};
