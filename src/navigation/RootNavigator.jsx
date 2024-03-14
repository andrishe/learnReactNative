import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './MyDrawer';

import MyStack from './MyStack';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      {/* <MyBottomTab /> */}
      <MyDrawer />
    </NavigationContainer>
  );
};

export default RootNavigator;
