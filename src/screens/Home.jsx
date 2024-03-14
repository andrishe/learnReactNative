import { Text, View, Button } from 'react-native';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Home</Text>
      <Button
        title="got to settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default Home;
