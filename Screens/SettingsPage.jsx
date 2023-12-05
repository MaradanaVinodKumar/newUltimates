import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./Header";

export default function SettingsPage() {
  return (
    <>
      <Header />
      <View style={styles.viewStyle}>
        <Text>SettingsScreen</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
