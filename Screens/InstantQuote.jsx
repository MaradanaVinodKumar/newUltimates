import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function InstantQuote() {
  const [textInputValue, setTextInputValue] = useState("");
  const [markerCoordinates, setMarkerCoordinates] = useState({
    latitude: 16.757,
    longitude: 81.6922,
  });

  const initialRegion = {
    latitude: markerCoordinates.latitude,
    longitude: markerCoordinates.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleSearchLocation = () => {
    // You can implement your logic here to update the map based on the entered location
    // For now, let's just set the marker to the initial Tanuku coordinates
    setMarkerCoordinates({
      latitude: 16.757,
      longitude: 81.6922,
    });
  };

  return (
    <>
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={initialRegion}>
          <Marker
            coordinate={markerCoordinates}
            title="Selected Location"
            description="Location based on entered text"
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
        <TouchableOpacity
          style={styles.button}
          onPress={handleSearchLocation}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 10,
    marginHorizontal: "10%",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
