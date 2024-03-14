import { createDrawerNavigator } from '@react-navigation/drawer';
import Notifications from '../screens/Notifications';
import MyStack from './MyStack';
import { Colors } from '../constants/colors';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: Colors.primary,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
    >
      <Drawer.Screen
        name="Stack"
        component={MyStack}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
