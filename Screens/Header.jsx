import { StyleSheet, Image, SafeAreaView, Platform } from "react-native";
import React from "react";
import logo from "../assets/UltimatesLogo.png";
export default function Header() {
  return (
    <SafeAreaView style={styles.view}>
      <Image
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
          height: "100%",
        }}
        source={logo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 65,
    backgroundColor: "white",
    marginVertical: Platform.OS === "ios" ? 15 : 0,
  },
});
