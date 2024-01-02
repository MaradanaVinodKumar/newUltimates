import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Ionicons";
import Footer from "../Components/Footer";
import FormContact from "../Components/FormContact";
import Header from "../Screens/Header";

export default function ContactPage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header button={true} />

      <ScrollView>
        <View style={styles.contactContainer}>
          {renderContactBox("614-602-7980")}
          {renderContactBox("Thossan247@gmail.com", "Rockakash100@gmail.com")}
          {renderContactBox("Ultimates Roofing LLC,", "Columbus, Ohio")}
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: 500, letterSpacing: 0.32 }}>
            Business Hours:
          </Text>
          <Text style={{ fontSize: 14, fontWeight: 400, letterSpacing: 0.28 }}>
            Monday to Friday - 9:00 AM to 5:00 PM
          </Text>
        </View>

        <View>
          <FormContact />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const renderContactBox = (title, subtitle) => (
  <View style={styles.ContactBox}>
    <View style={styles.textContainer}>
      <Icon name="ios-call" size={24} color="#333" />
    </View>
    <View style={styles.iconContainer}>
      <Text style={styles.ContactBoxTitle}>{title}</Text>
      {subtitle && <Text style={styles.ContactBoxTitle}>{subtitle}</Text>}
    </View>
  </View>
);

const styles = StyleSheet.create({
  contactContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "5%",
    paddingHorizontal: "5%",
  },
  ContactBox: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    backgroundColor: "#3D3B6D",
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 15,

    paddingHorizontal: 10,
  },

  iconContainer: {
    width: "100",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "space-around",
  },
  ContactBoxTitle: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.28,
    color: "#F9F9F9",
  },
  formContainer: {
    paddingHorizontal: "5%",
  },
});
