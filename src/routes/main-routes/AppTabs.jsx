import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStack } from './MainStack';
import ProfileScreen from '../../screens/main/ProfileScreen';
import MessagesScreen from '../../screens/main/MessagesScreen';
import AddEventScreen from '../../screens/main/AddEventScreen';
import AppTabComp from '../../components/shared/AppTabComp';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppSideBar } from './AppSideBar';
import MoreScreen from '../../screens/main/MoreScreen';
import { DrawerActions } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
      
    <SafeAreaView style={{ flex: 1 }}>
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
        }}
        initialRouteName='Home'
        tabBar={(props) => (
            <AppTabComp
                {...props}
            />
        )}
    >
      <Tab.Screen name="More" component={MoreScreen} 
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' },
        }}
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.openDrawer();
        },
      })}
       />
      <Tab.Screen name="Home" component={MainStack} />
      <Tab.Screen name="AddEvent" component={AddEventScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    </SafeAreaView>
  );
}