import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "@expo/vector-icons/Ionicons";
import HomeScreen from "./Screens/HomePage";
import AboutScreen from "./Screens/AboutPage";
import ServiceScreen from "./Screens/ServicePage";
import SettingsScreen from "./Screens/SettingsPage";
import InfoScreen from "./Screens/InfoPage";
import InstantQuote from "./Screens/InstantQuote";
import Header from "./Screens/Header";
import ServicePage from "./Screens/ServicePage";
import AboutPage from "./Screens/AboutPage";
import HomePage from "./Screens/HomePage";
import SettingsPage from "./Screens/SettingsPage";
import InfoPage from "./Screens/InfoPage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar />
        <Header />

        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: true,
            tabBarActiveBackgroundColor: "red",
            headerShown: false,
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "black",
            tabBarLabelStyle: { fontSize: 14, padding: "2%" },
            tabBarItemStyle: { borderRadius: 100 },
          }}
        >
          <Tab.Screen
            name="Home"
            options={{
              tabBarIcon: () => (
                <Icon name="home-sharp" size={25} color="black" />
              ),
            }}
          >
            {() => (
              <Stack.Navigator>
                <Stack.Screen
                  name="HomeScreen"
                  component={HomePage}
                  options={{
                    headerShown: false,
                    tabBarIcon: () => (
                      <Icon name="home-sharp" size={25} color="black" />
                    ),
                  }}
                />
                <Stack.Screen
                  name="quote"
                  component={InstantQuote}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen
            name="About"
            options={{
              tabBarIcon: () => (
                <Icon name="rocket-sharp" size={25} color="black" />
              ),
            }}
          >
            {() => (
              <Stack.Navigator>
                <Stack.Screen
                  name="Abouts"
                  component={AboutPage}
                  options={{
                    headerShown: false,
                    tabBarIcon: () => (
                      <Icon name="home-sharp" size={25} color="black" />
                    ),
                  }}
                />
                <Stack.Screen
                  name="quote"
                  component={InstantQuote}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen
            name="Services"
            options={{
              tabBarIcon: () => (
                <Icon name="briefcase-sharp" size={25} color="black" />
              ),
            }}
          >
            {() => (
              <Stack.Navigator>
                <Stack.Screen
                  name="Service"
                  component={ServicePage}
                  options={{
                    headerShown: false,
                    tabBarIcon: () => (
                      <Icon name="home-sharp" size={25} color="black" />
                    ),
                  }}
                />
                <Stack.Screen
                  name="quote"
                  component={InstantQuote}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen
            name="Setting"
            options={{
              tabBarIcon: () => (
                <Icon name="briefcase-sharp" size={25} color="black" />
              ),
            }}
          >
            {() => (
              <Stack.Navigator>
                <Stack.Screen
                  name="Settings"
                  component={SettingsPage}
                  options={{
                    headerShown: false,
                    tabBarIcon: () => (
                      <Icon name="md-settings-sharp" size={25} color="black" />
                    ),
                  }}
                />
                <Stack.Screen
                  name="quote"
                  component={InstantQuote}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            )}
          </Tab.Screen>

          <Tab.Screen
            name="Infos"
            options={{
              tabBarIcon: () => (
                <Icon name="briefcase-sharp" size={25} color="black" />
              ),
            }}
          >
            {() => (
              <Stack.Navigator>
                <Stack.Screen
                  name="Info"
                  component={InfoPage}
                  options={{
                    headerShown: false,
                    tabBarIcon: () => (
                      <Icon
                        name="information-circle-sharp"
                        size={25}
                        color="black"
                      />
                    ),
                  }}
                />
                <Stack.Screen
                  name="quote"
                  component={InstantQuote}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  sidePoint: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    top: 900,
    right: 0,
    position: "absolute",
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 11,
  },
});
