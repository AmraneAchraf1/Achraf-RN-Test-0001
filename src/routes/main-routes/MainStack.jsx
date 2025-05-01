import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/main/HomeScreen';
import EventInfo from '../../screens/main/EventInfo';
import Colors from '../../constants/Colors';
import InvitationScreen from '../../screens/main/InvitationScreen';

const Stack = createStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Event" component={EventInfo} />
      
    </Stack.Navigator>
  );
}



