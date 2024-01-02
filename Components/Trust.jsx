import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  Text,
} from "react-native";
import { useFonts } from "expo-font";
import HauoraRegular from "../assets/Fonts/Hauora-Regular.ttf";

const Trust = () => {
  let [fontsLoaded] = useFonts({
    Hauora: HauoraRegular,
  });

  const images = [
    require("../assets/1.png"),
    require("../assets/2.png"),
    require("../assets/3.png"),
    require("../assets/4.png"),
    require("../assets/5.png"),
    require("../assets/6.png"),
  ];

  const screenWidth = Dimensions.get("window").width;
  const itemsPerRow = 2; // Number of items in each row
  const itemWidth = (screenWidth - 40) / itemsPerRow - 40; // Adjusted for padding and increased gap

  return (
    <SafeAreaView style={{marginTop:40,marginBottom:40}}>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: 500, letterSpacing: 0.32,fontFamily:'Hauora',marginBottom:20 }}>
          Trusted By
        </Text>
      </View>
      <View style={styles.container}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={{ ...styles.image, width: itemWidth }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    height: 120,
    width: 150,
    marginBottom: 10,
    borderRadius: 8,
    resizeMode: "contain",
    padding: 10,
    marginHorizontal: 15, // Increase the marginRight value for increased gap
  },
});

export default Trust;
