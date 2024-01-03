import { View, Text, ScrollView } from "react-native";
import React from "react";
import Reviews from "../Components/Reviews";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";
import Trust from "../Components/Trust";

export default function ReviewsPage() {
  const navigation = useNavigation();
  return (
    <>
      <Header button={true} />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "5%",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#181818",
              fontSize: 20,
              fontWeight: "normal",
              letterSpacing: 0.4,
              fontFamily: "Hauora",
            }}
          >
            About
          </Text>
          <Text
            style={{
              color: "#181818",
              fontFamily: "Hauora",
              fontSize: 14,
              marginTop: 6,
              fontWeight: "400",
            }}
            onPress={() => navigation.navigate("home")}
          >
            Back
          </Text>
        </View>
        <Reviews />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Trusted By</Text>
        </View>

        <Trust />
      </ScrollView>
    </>
  );
}
