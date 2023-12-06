import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import who from "../assets/about1.jpeg";
import { useNavigation } from "@react-navigation/native";

export default function AboutPage() {
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
      <View
        style={{
          marginTop: 20,
          justifyContent: "center", // Centers vertically
          alignItems: "center",
        }}
      >
        <Image source={who} style={styles.ourImage} />
      </View>
      <Text
        style={{ fontSize: 22, fontWeight: "bold", marginHorizontal: "8%" }}
      >
        WHO WE ARE
      </Text>
      <Text
        style={{ fontSize: 15, marginHorizontal: "8%", marginVertical: "2%" }}
      >
        Atlas Roofing and Siding offers a full range of services including the
        installation of new roofs, roof maintenance, roof repairs, and
        re-roofing services for both Residential and Commercial projects
        including homes, offices, warehouses, and multi-family dwellings.
      </Text>
      <Text
        style={{ fontSize: 15, marginHorizontal: "8%", marginVertical: "1%" }}
      >
        Since our start in 2003, our customers have come to know our
        knowledgeable and professional service. Atlas Roofing and Siding is your
        premier{" "}
      </Text>
    </>
  );
}
const styles = StyleSheet.create({
  ourImage: {
    width: "90%",
    height: "23%",
    paddingVertical: "35%",
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
