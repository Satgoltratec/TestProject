import {View, SafeAreaView, Text, TextInput, TextBase} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {RootStackParamList} from './MainNavigation';
import {projects} from './data/projects';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProjectDetailsScreen'
>;

function ProjectDetailsScreen({navigation, route}: DetailsScreenProps) {
  const data = projects.find(project => project.id === route.params.id);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{padding: 7, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Cliente: </Text>
          <Text>{data?.customer}</Text>
        </View>
        <View style={{padding: 7, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Titulo: </Text>
          <Text>{data?.name}</Text>
        </View>
        <View style={{padding: 7, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Importe: </Text>
          <Text>{data?.price}€</Text>
        </View>
        <View
          style={{
            padding: 10,
            justifyContent: 'center',
          }}>
          <Text>{data?.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProjectDetailsScreen;
