import { StyleSheet, Text, View,StatusBar } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "@expo/vector-icons/Ionicons";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import ServiceScreen from "./Screens/ServiceScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import InfoScreen from "./Screens/InfoScreen";

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveBackgroundColor: "red",
          tabBarInactiveBackgroundColor: "white",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: { fontSize: 16 },
          headerShown: false,
          headerTitleStyle: {display:'none', margin:0, padding: 0}
        }}
      >
        <Tab.Screen
          name="Home"
          style={{fontSize: 36}}
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Icon name="home-sharp" size={25} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: () => <Icon name="rocket" size={25} color="black" />,
          }}
        />
        <Tab.Screen
          name="Services"
          component={ServiceScreen}
          options={{
            tabBarIcon: () => <Icon name="briefcase-sharp" size={25} color="black" />,
          }}
        />
        <Tab.Screen
          name=" Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: () => (
              <Icon name="md-settings-sharp" size={25} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Info"
          component={InfoScreen}
          options={{
            tabBarIcon: () => (
              <Icon name="information-circle-sharp" size={25} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
