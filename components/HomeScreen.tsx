import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export function HomeScreen({navigation}: HomeScreenProps) {
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
