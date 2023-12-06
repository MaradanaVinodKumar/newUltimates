import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";

export default function InstantQuote() {
  const [textInputValue, setTextInputValue] = useState("");

  const initialRegion = {
    latitude: 16.757,
    longitude: 81.6922,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const tanukuCoordinates = {
    latitude: 16.757,
    longitude: 81.6922,
  };

  return (
    <>
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={initialRegion}>
          <Marker
            coordinate={tanukuCoordinates}
            title="Tanuku City"
            description="Tanuku city in India"
          />
        </MapView>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter Location"
          value={textInputValue}
          onChangeText={(text) => setTextInputValue(text)}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 26,
    padding: 8,
    marginHorizontal: "10%",
  },

  map: {
    width: Dimensions.get("window").width,
    height: 250,
  },
});
