import React, { useEffect, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { Video } from "expo-av";

import Header from "../Screens/Header";
import ourService1 from "../assets/ServicePageImages/our-service1.jpg";
import ourService2 from "../assets/ServicePageImages/our-service2.jpg";
import ourService3 from "../assets/ServicePageImages/our-service3.jpg";
import ourService4 from "../assets/ServicePageImages/our-service4.jpg";
import ourService5 from "../assets/ServicePageImages/our-service5.jpg";
import Welcome from "../Components/Welcome";
import PromiseText from "../Components/PromiseText";
import { useNavigation } from "@react-navigation/native";
import Cards2 from "../Components/Cards2";
import Footer from "../Components/Footer";
import Agreements from "../Components/Agreements";

// import TextCarousal from "../Components/TextCarousal";

// import { Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const navigation = useNavigation();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.pauseAsync();
      }
    };
  }, []);

  const sample = require("../assets/roof.mp4");

  return (
    <SafeAreaView>
      <Header button={true} />
      {/* <SidePointNavigation /> */}
      <ScrollView style={{ height: "auto" }}>
        <SafeAreaView>
          <View>
            <Video
              ref={videoRef}
              source={sample}
              style={styles.backgroundVideoContainer}
              resizeMode="cover"
              shouldPlay={true}
              isMuted={true}
              isLooping={true}
            />
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>
                Elevate {"\n"}Every Horizon{"\n"}With Our Roofing{"\n"}Expertise
              </Text>

              <Text style={styles.sub_text}>
                A symphony of strength resonating{"\n"}through every project
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: "crimson",
                  padding: 6,
                  width: "55%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                  marginRight: "29%",
                  paddingVertical: "3%",
                }}
                onPress={() => navigation.navigate("FreeEstimate")}
              >
                <Text style={styles.buttonText}>GET A FREE ESTIMATE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        {/* <Cards1 /> */}

        <View style={styles.ourServiceBackground}>
          <Text style={{ fontSize: 30, fontWeight: "500", textAlign: "left" }}>
            Our Services
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "left",
              paddingVertical: "2%",
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "400",
                fontSize: 15,
                textAlign: "justify",
              }}
            >
              From Home and Commercial Roofing to Siding, Gutters, and Windows,
              our services redefine precision and style. Elevate your property
              with our commitment to unparalleled craftsmanship.
            </Text>
          </View>
        </View>
        <SafeAreaView>
          {/*first card */}
          <View style={styles.servicesCards}>
            <View
              // style={{
              //   flex: 1,
              //   justifyContent: "center", // Centers vertically
              //   alignItems: "center", // Centers horizontally
              // }}

              style={styles.ourImageBackground}
            >
              <Image source={ourService1} style={styles.ourImage} />
            </View>
            <Text style={styles.servicesCardsHeading}>Home Roofing</Text>
            <Text style={styles.servicesCardsText}>
              Enhance your home's protection with expert residential roofing
              solutions, blending durability and aesthetic appeal seamlessly.
            </Text>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate("Residential")}
            >
              <Text style={styles.buttonContainerText}>Learn More</Text>
            </TouchableOpacity>
          </View>
          {/*second card */}
          <View style={styles.servicesCards}>
            <View style={styles.ourImageBackground}>
              <Image source={ourService2} style={styles.ourImage} />
            </View>
            <Text style={styles.servicesCardsHeading}>Commercial Roofing</Text>
            <Text style={styles.servicesCardsText}>
              Elevate your business infrastructure with our top-tier commercial
              roofing services, combining reliability and performance for
              lasting excellence.
            </Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate("Commercial")}
            >
              <Text style={styles.buttonContainerText}>Learn More</Text>
            </TouchableOpacity>
          </View>
          {/*3rd card */}
          <View style={styles.servicesCards}>
            <View style={styles.ourImageBackground}>
              <Image source={ourService3} style={styles.ourImage} />
            </View>
            <Text style={styles.servicesCardsHeading}>Siding Enhancements</Text>
            <Text style={styles.servicesCardsText}>
              Transform your property's exterior with our premium siding
              options, offering a perfect fusion of style, durability, and low
              maintenance.
            </Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate("Siding")}
            >
              <Text style={styles.buttonContainerText}>Learn More</Text>
            </TouchableOpacity>
          </View>
          {/*4th card*/}
          <View style={styles.servicesCards}>
            <View style={styles.ourImageBackground}>
              <Image source={ourService4} style={styles.ourImage} />
            </View>
            <Text style={styles.servicesCardsHeading}>Gutter Systems</Text>
            <Text style={styles.servicesCardsText}>
              Transform your property's exterior with our premium siding
              options, offering a perfect fusion of style, durability, and low
              maintenance.
            </Text>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate("Gutters")}
            >
              <Text style={styles.buttonContainerText}>Learn More</Text>
            </TouchableOpacity>
          </View>
          {/*5th card */}
          <View style={styles.servicesCards}>
            <View style={styles.ourImageBackground}>
              <Image source={ourService5} style={styles.ourImage} />
            </View>
            <Text style={styles.servicesCardsHeading}>Window Services</Text>
            <Text style={styles.servicesCardsText}>
              Immerse your spaces in natural light and energy efficiency with
              our high-quality windows, designed for both beauty and functional
              brilliance.
            </Text>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate("Windows")}
            >
              <Text style={styles.buttonContainerText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <Welcome />

        <PromiseText />
        <Cards2 />

        <Agreements />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundVideoContainer: {
    flex: 1,
    height: Platform.OS === "ios" ? 480 : 450,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    resizeMode: "cover",
    width: "100%",
  },

  backText: {
    color: "white",
    fontSize: 15,
    width: "80%",
    textAlign: "center",
  },
  backText_black: {
    color: "black",
    fontSize: 15,
    width: "80%",
    textAlign: "center",
  },
  ourImageBackground: {
    alignContent: "center",
    width: "100%",
  },
  ourImage: {
    width: "100%",
    // height: 26,
    height: "26%",
    paddingVertical: "26%",
  },
  buttonContainer: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "6%",
    marginBottom: "20%",
  },
  buttonContainerText: {
    color: "#B22335",
    fontSize: 15,
  },
  buttonText: {
    color: "#F9F9F9",
    fontSize: 16,
    fontWeight: "400",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    padding: 16,
    backgroundColor: "transparent",
    position: "absolute", // Set the desired background color
  },
  headerText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(30, 30, 42, 0.57)", // Set the desired transparency here
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    fontSize: 35,
    textAlign: "justify",
    fontWeight: "bold",
    color: "white",
    width: "84%",
  },
  sub_text: {
    fontSize: 18,
    color: "white",
    width: "84%",
    textAlign: "justify",
  },

  servicesCards: {
    marginVertical: "3%",
    marginHorizontal: "5%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: 350,
  },
  servicesCardsHeading: {
    fontWeight: "500",
    fontSize: 22,
    paddingHorizontal: "6%",
    marginVertical: 10,
  },
  servicesCardsText: {
    textAlign: "justify",
    width: "100%",
    fontSize: 15,
    paddingHorizontal: "7%",
    marginBottom: "3%",
    fontWeight: "400",
    color: "#323539",
  },
  ourServiceBackground: {
    marginHorizontal: "6%",
    marginVertical: "8%",
  },
});
