import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  Text,
} from "react-native";
// import { useFonts } from "expo-font";
import HauoraRegular from "../assets/Fonts/Hauora-Regular.ttf";
import * as Font from 'expo-font';


async function loadFonts() {
  await Font.loadAsync({
    'Hauora': HauoraRegular,
    // You can add more fonts here if needed
  });
}
const Trust = () => {
  useEffect(() => {
    loadFonts();
  }, []);

  const images = [
    require("../assets/1.webp"),
    require("../assets/2.webp"),
    require("../assets/3.webp"),
    require("../assets/4.webp"),
    require("../assets/5.webp"),
    require("../assets/6.webp"),
  ];

  const screenWidth = Dimensions.get("window").width;
  const itemsPerRow = 2; // Number of items in each row
  const itemWidth = (screenWidth - 20) / itemsPerRow - 40; // Adjusted for padding and increased gap

  return (
    <SafeAreaView style={{ marginTop: 40, marginBottom: 50 }}>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontSize: 21, fontWeight: '600', letterSpacing: 0.32, fontFamily: 'Hauora', marginBottom: 10 }}>
          Trusted By
        </Text>
      </View>
      <View style={styles.container}>
        {images.map((image, index) => (
          <View key={index} style={{ width: itemWidth, height: 120, marginVertical: 5 }}>
            <Image
              source={image}
              style={{ ...styles.image }}
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    // marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    // marginHorizontal: 15, // Increase the marginRight value for increased gap
  },
});

export default Trust;