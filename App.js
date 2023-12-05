import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "@expo/vector-icons/Ionicons";
import HomeScreen from "./Screens/HomePage";
import AboutScreen from "./Screens/AboutPage";
import ServiceScreen from "./Screens/ServicePage";
import SettingsScreen from "./Screens/SettingsPage";
import InfoScreen from "./Screens/InfoPage";

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveBackgroundColor: "red",
          headerShown: false,

          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: { fontSize: 14, padding: "2%" },
          tabBarItemStyle: { borderRadius: 100 },
          // tabBarItemStyle: { borderRadius: 100 ,  borderBottomLeftRadius: 100, // Adjust the values based on your preference
          // borderBottomRightRadius: 80,},
          // tabBarStyle: {
          //   borderTopLeftRadius: 40, // Adjust the values based on your preference
          //   borderTopRightRadius: 40,
          //   backgroundColor: 'green', // Set the background color of the bottom tab bar
          // },
        }}
      >
        <Tab.Screen
          name="Home"
          style={{ fontSize: 36 }}
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
            tabBarIcon: () => (
              <Icon name="briefcase-sharp" size={25} color="black" />
            ),
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
