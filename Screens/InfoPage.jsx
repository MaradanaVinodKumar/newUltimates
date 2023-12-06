import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function InfoPage() {
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
              navigation.navigate("Info");
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.viewStyle}>
        <Text>InfoScreen</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },sidePoint: {
    height: 60,
    width: 50,
    backgroundColor: "red",
    top: 380,
    right: 0,
    position: "absolute",
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 11,
  },
});
