import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/LoginScreen';

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}