import { createStackNavigator } from '@react-navigation/stack';
import { AuthStack } from './auth-routes/AuthStack';
import AppTabs from './main-routes/AppTabs';
import { AppSideBar } from './main-routes/AppSideBar';
import InvitationScreen from '../screens/main/InvitationScreen';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AppSideBar"
    >
      <Stack.Screen name="AppSideBar" component={AppSideBar} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="Invitation" component={InvitationScreen} />
    </Stack.Navigator>
  );
}