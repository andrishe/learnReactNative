import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { Colors } from '../constants/colors';
import { Text, View } from 'react-native';
import MyBottomTab from './MyBottomTab';

const HomeStack = createStackNavigator();

const CustomHeader = ({ title }) => {
  return (
    <View
      style={{
        height: 80,
        width: '100%',
        backgroundColor: Colors.secondary,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff' }}>
        {title}
      </Text>
    </View>
  );
};

const myConfig = {
  headerShown: false,
  headerTitleAlign: 'center',
  presentation: 'modal',
  gestureEnabled: true,
  keyboardHandlingEnabled: true,
  // header: ({ navigation, route, options, back }) => (
  //   <CustomHeader title={route.name} />
  // ),
};

const MyStack = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={myConfig}>
      <HomeStack.Screen name="Root" component={MyBottomTab} />

      <HomeStack.Group screenOptions={{ headerShown: true }}>
        <HomeStack.Screen
          name="Settings"
          component={Settings}
          options={{ headerBackTitle: 'Home' }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

export default MyStack;
