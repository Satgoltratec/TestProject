import {View, SafeAreaView, Text, TextInput, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ProjectStackParamList} from '../../navigation';
import {projects} from '../../../data/projects';

type DetailProjectsProps = NativeStackScreenProps<
  ProjectStackParamList,
  'DetailProjects'
>;

export const DetailProjects = ({navigation, route}: DetailProjectsProps) => {
  const data = projects.find(project => project.id === route.params.id);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.inner}>
          <Text style={styles.title}>Cliente</Text>
          <Text style={styles.text}>{data?.customer}</Text>
          <Text style={styles.title}>Titulo</Text>
          <Text style={styles.text}>{data?.name}</Text>
          <Text style={styles.title}>Precio</Text>
          <Text style={styles.text}>{data?.price}€</Text>
          <Text style={styles.title}>Descripción</Text>
          <Text style={styles.text}>{data?.description}</Text>
        </View>
      </ScrollView>
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
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    height: 35,
    marginBottom: 5,
  },
});
