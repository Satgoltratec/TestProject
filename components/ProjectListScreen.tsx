import {View, SafeAreaView, Text, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {projects} from './data/projects';

function ProjectListScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{padding: 7}}>
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
        {projects?.map((project, index) => (
          <View
            key={project.id}
            style={{
              borderBottomWidth: 0.5,
              borderColor: '#e0e0e0',
              backgroundColor: index % 2 === 0 ? 'white' : '#f0f0f0',
            }}>
            <Text style={{fontSize: 12, padding: 5, fontWeight: 'bold'}}>
              {project.customer}
            </Text>
            <Text style={{fontSize: 15, padding: 8}}>{project.name} </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProjectListScreen;
