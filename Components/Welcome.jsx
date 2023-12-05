import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import welcome from "../assets/welcome1.jpeg";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ marginTop: 50 }}></View>
      <View style={styles.container}>
        {/* Background Image */}
        <Image
          source={welcome} // Update with your image URL
          style={styles.backgroundImage}
        />

        {/* Transparent White Background View */}
        <View style={styles.overlay}>
          {/* Text */}
          <Text style={styles.heading}>WELCOME TO -----------</Text>
          <Text style={styles.text}>ATLAS ROOFING & SIDING</Text>
          <Text style={styles.redText}>
            A Long History of Roofing Excellenece
          </Text>
          <Text style={styles.para}>
            Atlas Roofing and Siding offers a full range of services including
            the installation of new roofs, roof maintenance, roof repairs, and
            re-roofing services for both Residential and Commercial projects
            including homes, offices, warehouses, and multi-family dwellings.
            Since our start in 2003, our customers have come to know our
            knowledgeable and professional service.
          </Text>
          <Text style={styles.para}>
            Atlas Roofing and Siding is your premier Columbus roofer.
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                navigation.navigate("About");
              }}
            >
              READ MORE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Transparent white background (adjust the last value for transparency)
    marginHorizontal: "7%",
    marginVertical: "1%",
  },
  text: {
    fontSize: 20,
    color: "#333", // Text color
    fontWeight: "900",
    textAlign: "justify",
    marginHorizontal: "5%",
    width: "50%",
  },
  heading: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginHorizontal: "5%",
  },
  redText: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center",
  },
  para: {
    fontSize: 16,
    marginTop: 15,
    marginHorizontal: "6%",
  },
  buttonContainer: {
    backgroundColor: "red",
    width: "40%",
    padding: 6,

    alignItems: "center",
    marginHorizontal: "6%",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
