import { ReactNode } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../pages/home';
import LoginScreen from '../pages/login';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 

import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer"; 

export type ParamList = {
    Home: undefined;
    Login: {name:string};
    Tab: undefined;
    Drawer: undefined;
  };

const Stack = createStackNavigator<ParamList>();
const Tab = createBottomTabNavigator<ParamList>();
const Drawer = createDrawerNavigator<ParamList>();

function TabRoutes(): ReactNode {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
    }}>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

function DrawerRoutes(): ReactNode {
  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle:{
        backgroundColor: '#36D6AD'
      },
      drawerLabelStyle:{
        color: 'red',
      },
      headerTransparent: true,
    }} >
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default function Navigation(): ReactNode {
    return (
      <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                headerShown: false,
            }}
        >
          <Stack.Screen
              name="Home"
              component={HomeScreen}
          />
          <Stack.Screen
              name="Login"
              component={LoginScreen}
          />
          <Stack.Screen
              name="Tab"
              component={TabRoutes}
          />
          <Stack.Screen
              name="Drawer"
              component={DrawerRoutes}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }