import {SafeAreaView, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './MainNavigation';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export function HomeScreen() {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
        }}></View>
    </SafeAreaView>
  );
}

export default HomeScreen;
