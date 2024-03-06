import {View, SafeAreaView, Text} from 'react-native';
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
};
