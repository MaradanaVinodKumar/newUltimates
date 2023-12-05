import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.view}>
      <Image
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          height: 40,
        }}
        source={require("../assets/atlaslogo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 65,
    backgroundColor: "white",
  },
});
