import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MyBottomTab = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: Colors.secondary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <FontAwesome
                name="align-left"
                style={{ marginLeft: 15 }}
                size={28}
                color={Colors.secondary}
              />
            </Pressable>
          ),
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: 'green',
            color: Colors.primary,
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyBottomTab;
