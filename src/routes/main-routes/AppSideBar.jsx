import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from '../../screens/main/HomeScreen';
import ProfileScreen from '../../screens/main/ProfileScreen';
import AppTabs from './AppTabs';
import { Linking } from 'react-native';
import AddEventScreen from '../../screens/main/AddEventScreen';
import InvitationScreen from '../../screens/main/InvitationScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  console.log(props);
  
    return (
      <DrawerContentScrollView {...props}>

        <DrawerItem
          label="Invitation"
          onPress={() => props.navigation.navigate('Invitation')}
          activeTintColor='#014035'
        />
        <DrawerItem
          label="Add Event"
          onPress={() => props.navigation.navigate('Tabs', { screen: 'AddEvent' })}
          activeTintColor='#014035'
        />
        <DrawerItem
          label="Profile"
          onPress={() => props.navigation.navigate('Tabs', { screen: 'Profile' })}
        />
        <DrawerItem
          label="Terms of Service"
          onPress={() => Linking.openURL('https://example.com/terms')}
        />
        <DrawerItem
          label="Privacy Policy"
          onPress={() => Linking.openURL('https://example.com/privacy')}
        />
        
      </DrawerContentScrollView>
    );
  }

export function AppSideBar() {
  return (
    <Drawer.Navigator
        screenOptions={{
            headerShown: false,
            drawerType: 'back',
            drawerStyle: {
            backgroundColor: '#fff',
            width: "64%",
            },
            drawerStatusBarAnimation: 'fade',
            swipeMinDistance: 64,
            swipeEdgeWidth: 64,
            swipeEnabled: true,
            drawerActiveTintColor: '#014035',
        }}
        drawerContent={(props) => {
            return (
                <CustomDrawerContent {...props} />
            );
        }}

    >
      <Drawer.Screen name="Tabs" component={AppTabs} />
    </Drawer.Navigator>
  );
}