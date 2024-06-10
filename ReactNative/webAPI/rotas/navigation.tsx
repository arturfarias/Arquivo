import { ReactNode } from "react";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer"; 

import Page1 from "../pages/page1";
import Page2 from "../pages/page2";
import Page3 from "../pages/page3";


export type ParamList = {
    Page1: undefined;
    Page2: undefined;
    Page3: undefined;
  };

const Drawer = createDrawerNavigator<ParamList>();

export default function Navigation(): ReactNode {
    return (
      <NavigationContainer>
        <Drawer.Navigator 
            initialRouteName="Page1" 
        >
          <Drawer.Screen
              name="Page1"
              component={Page1}
          />
          <Drawer.Screen
              name="Page2"
              component={Page2}
          />
          <Drawer.Screen
              name="Page3"
              component={Page3}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }