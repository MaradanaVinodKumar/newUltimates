import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import service1 from "../assets/our-service1.jpeg";
import service2 from "../assets/our-service2.jpeg";
import service3 from "../assets/our-service3.webp";
import service4 from "../assets/gutters.jpeg";
import service5 from "../assets/windows.jpeg";
import { useNavigation } from "@react-navigation/native";

export default function ServicePage() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.sidePoint}>
        <TouchableOpacity>
          <MaterialIcons
            name="request-quote"
            size={34}
            color="white"
            onPress={() => {
              navigation.navigate("quote");
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.viewStyle}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginHorizontal: "8%",
            textAlign: "center",
          }}
        >
          WHAT WE DO
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginHorizontal: "12%",
            marginVertical: "2%",
          }}
        >
          Atlas Roofing and Siding offers a full range of services including the
          installation of new roofs, roof maintenance, roof repairs, and
          re-roofing services for both Residential and Commercial projects
          including homes, offices, warehouses, and multi-family dwellings.
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginHorizontal: "12%",
            marginVertical: "1%",
          }}
        >
          Since our start in 2003, our customers have come to know our
          knowledgeable and professional service. Atlas Roofing and Siding is
          your premier{" "}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Centers vertically
            alignItems: "center",
            marginTop: 50, // Centers horizontally
          }}
        >
          <Image source={service1} style={styles.ourImage} />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>RESIDENTIAL ROOFING</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Centers vertically
            alignItems: "center",
            marginTop: 50, // Centers horizontally
          }}
        >
          <Image source={service2} style={styles.ourImage} />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>COMMERCIAL ROOFING</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Centers vertically
            alignItems: "center",
            marginTop: 50, // Centers horizontally
          }}
        >
          <Image source={service3} style={styles.ourImage} />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SIDING INSTALLATION</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Centers vertically
            alignItems: "center",
            marginTop: 50, // Centers horizontally
          }}
        >
          <Image source={service4} style={styles.ourImage} />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>GUTTERS</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Centers vertically
            alignItems: "center",
            marginTop: 50, // Centers horizontally
          }}
        >
          <Image source={service5} style={styles.ourImage} />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>WINDOWS</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  img: {
    padding: 10,
  },

  viewStyle: { flex: 1 },
  ourImage: {
    width: "90%",
    height: "23%",
    paddingVertical: "35%",
  },
  buttonContainer: {
    backgroundColor: "red",
    width: "90%",
    padding: 6,

    alignItems: "center",
    marginHorizontal: "5%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  sidePoint: {
    height: 60,
    width: 50,
    backgroundColor: "black",
    top: 380,
    right: 0,
    position: "absolute",
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 11,
  },
});
