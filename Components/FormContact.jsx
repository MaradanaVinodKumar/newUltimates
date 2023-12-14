import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function FormContact() {
  const data = [
    { label: "Residential Roofing", value: "ResidentialRoofing" },
    { label: "Commercial Roofing", value: "CommercialRoofing" },
    { label: "Siding", value: "Siding" },
    { label: "Gutters", value: "Gutters" },
    { label: "Windows", value: "Windows" },
    { label: "Others", value: "Others" },
  ];
  const [value, setValue] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    gmail: "",
    phoneNumber: "",
    service: "",
    city: "",
    zip: "",
    state: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(formData);
    // You can send the form data to your server or perform any other actions
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>First Name *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("firstName", text)}
        />

        <Text>Last Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("lastName", text)}
        />

        <Text>Your Email Address *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("gmail", text)}
        />

        <Text>Your Phone Number *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("phoneNumber", text)}
          keyboardType="phone-pad"
        />

        <Text>Service *</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="  Select a service"
          searchPlaceholder="Search..."
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
        />

        <Text>Address *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("address", text)}
        />

        <Text>City *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("city", text)}
        />

        <Text>State *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("state", text)}
        />

        <Text>Zip *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("zip", text)}
          keyboardType="numeric"
        />

        <Text>Message</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={8}
          onChangeText={(text) => handleInputChange("message", text)}
          placeholder="Please feel free to add as much information as you like"
        />

        <Button title="Submit" onPress={handleSubmit} color={"crimson"} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 16,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
