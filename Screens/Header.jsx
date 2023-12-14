import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
import React from "react";

export default function Header() {
  return (
    <SafeAreaView style={styles.view}>
      <Image
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          height: "60%",
        }}
        source={require("../assets/atlaslogo.png")}
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
