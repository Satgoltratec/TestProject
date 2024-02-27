import {View, SafeAreaView, Text, TextInput, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {RootStackParamList} from '../App';
import {projects} from './data/projects';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ProjectListProps = NativeStackScreenProps<
  RootStackParamList,
  'ProjectListScreen'
>;

function ProjectListScreen({navigation}: ProjectListProps) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexGrow: 1}}>
        <TextInput
          style={{
            height: 35,
            marginRight: 12,
            borderWidth: 1,
            backgroundColor: 'white',
            borderColor: '#f0f0f0',
            shadowColor: '#f6f6f6',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 4,
            padding: 5,
            borderRadius: 20,
            marginBottom: 10,
          }}
          placeholder="Buscar proyecto"
        />
      </View>
      <ScrollView style={{padding: 7}}>
        {projects?.map((project, index) => (
          <Pressable
            key={project.id}
            onPress={() =>
              navigation.navigate('ProjectDetailsScreen', {id: project.id})
            }>
            <View
              key={project.id}
              style={{
                borderBottomWidth: 0.5,
                borderColor: '#e0e0e0',
                backgroundColor: index % 2 === 0 ? 'white' : '#f0f0f0',
              }}>
              <Pressable key={project.id}>
                <Text style={{fontSize: 12, padding: 5, fontWeight: 'bold'}}>
                  {project.customer}
                </Text>
              </Pressable>
              <Text style={{fontSize: 15, padding: 8}}>{project.name} </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProjectListScreen;
