import React, { useEffect } from "react";
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

import { MaterialIcons } from "@expo/vector-icons";
import ourService1 from "../assets/ServicePageImages/our-service1.jpeg";
import ourService2 from "../assets/ServicePageImages/our-service2.jpeg";
import ourService3 from "../assets/ServicePageImages/our-service3.webp";
import Welcome from "../Components/Welcome";
import PromiseText from "../Components/PromiseText";
import { useNavigation } from "@react-navigation/native";
import Cards1 from "../Components/Cards1";
import Cards2 from "../Components/Cards2";
import MyCarousel from "../Components/MyCarousel";
import Footer from "../Components/Footer";
import Agreements from "../Components/Agreements";

// import { Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function HomePage() {

  const navigation = useNavigation();

  const sample = require("../assets/final.gif");
  // const videoRef = useRef(null);
  // const navigation = useNavigation();
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("beforeRemove", (e) => {
  //     // Pause or stop the video when navigating away
  //     if (videoRef.current) {
  //       videoRef.current.pauseAsync(); // or use videoRef.current.stopAsync();
  //     }
  //   });

  //   const playVideo = async () => {
  //     if (videoRef.current) {
  //       try {
  //         if (Platform.OS === "ios") {
  //           // On iOS, autoplay is not allowed, so play manually
  //           await videoRef.current.playAsync();
  //         } else {
  //           // On Android, use shouldPlay prop for autoplay
  //           // Ensure shouldPlay is true for Android
  //           videoRef.current.playAsync();
  //         }
  //       } catch (error) {
  //         or("Error playing video:", error);
  //       }
  //     }
  //   };

  //   playVideo(); // Play the video when component mounts

  //   return unsubscribe;
  // }, [navigation]);
  // const handlePlaybackStatusUpdate = (status) => {
  //   if (status.didJustFinish) {
  //     // Check if videoRef is available
  //     if (videoRef.current) {
  //       videoRef.current.replayAsync();
  //     }
  //   }
  // };
  return (
    <SafeAreaView>
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

      <ScrollView>
        <SafeAreaView>
          <View>
            <Image source={sample} style={styles.backgroundVideoContainer} />
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>
                Elevate Every Horizon With Our Roofing Expertise
              </Text>

              <Text style={styles.sub_text}>
                A symphony of strength resonating through every project
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: "black",
                  padding: 6,
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
                onPress={() => navigation.navigate("FreeEstimate")}
              >
                <Text style={styles.buttonText}>GET A FREE ESTIMATE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        <Cards1 />
        <View style={{ height: 50 }}></View>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
          OUR SERVICES
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: "10%",
            paddingVertical: "5%",
          }}
        >
          <Text
            style={{ color: "red", fontWeight: "bold", textAlign: "center" }}
          >
            Ultimates Roofing and Siding{" "}
            <Text
              style={{
                color: "black",
                fontWeight: "400",
                fontSize: 14,
                textAlign: "center",
              }}
            >
              offers a full range of services including the installation of new
              roofs, roof maintenance, roof repairs, and re-roofing services for
              both Residential and Commercial projects including homes, offices,
              warehouses, and multi-family dwellings.
            </Text>
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Centers vertically
            alignItems: "center", // Centers horizontally
          }}
        >
          <Image source={ourService1} style={styles.ourImage} />
        </View>
        <Text
          style={{ fontWeight: "bold", fontSize: 18, paddingHorizontal: "6%" }}
        >
          RESIDENTIAL ROOFING
        </Text>
        <Text
          style={{
            textAlign: "justify",
            width: "85%",
            fontSize: 14,
            paddingHorizontal: "7%",
          }}
        >
          Ultimates Roofing &amp; Siding is your storm damage expert. When
          storms strike and there’s hail damage, wind damage, and more..{" "}
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Residential")}
        >
          <Text style={styles.buttonText}>READ MORE</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Centers vertically
            alignItems: "center",
            marginTop: 50, // Centers horizontally
          }}
        >
          <Image source={ourService2} style={styles.ourImage} />
        </View>
        <Text
          style={{ fontWeight: "bold", fontSize: 18, paddingHorizontal: "6%" }}
        >
          COMMERCIAL ROOFING
        </Text>
        <Text
          style={{
            textAlign: "justify",
            width: "85%",
            fontSize: 14,
            paddingHorizontal: "7%",
          }}
        >
          Ultimates is proud to offer our customers products that have earned
          the government’s ENERGY STAR label. Ultimates ENERGY STAR qualified
          products.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Commercial")}
        >
          <Text style={styles.buttonText}>READ MORE</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Centers vertically
            alignItems: "center",
            marginTop: 50, // Centers horizontally
          }}
        >
          <Image source={ourService3} style={styles.ourImage} />
        </View>
        <Text
          style={{ fontWeight: "bold", fontSize: 18, paddingHorizontal: "6%" }}
        >
          SIDING INSTALLATION
        </Text>
        <Text
          style={{
            textAlign: "justify",
            width: "85%",
            fontSize: 14,
            paddingHorizontal: "7%",
          }}
        >
          Ultimates Roofing and Siding offers a complete line of high-quality
          siding products including, Vinyl, James Hardie, and LP Smartside.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Siding")}
        >
          <Text style={styles.buttonText}>READ MORE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: "55%",
            padding: 6,
            alignItems: "center",
            marginHorizontal: "23%",
            marginTop: 40,
          }}
        >
          <Text
            style={styles.buttonText}
            onPress={() => {
              navigation.navigate("Services");
            }}
          >
            VIEW ALL SERVICES
          </Text>
        </TouchableOpacity>
        <Welcome />

        <PromiseText />
        <Cards2 />
        <MyCarousel />
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
    resizeMode: "stretch",
  },
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 200,
    backgroundColor: "red",
  },
  view_white: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 200,
    backgroundColor: "white",
  },
  view_mission_black: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 200,
    backgroundColor: "black",
    borderColor: "red",
    borderWidth: 3,
  },
  view_black: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 200,
    backgroundColor: "black",
    borderColor: "red",
    borderWidth: 3,
  },
  image: {
    width: 50, // set the width of the image as needed
    height: 50, // set the height of the image as needed
    resizeMode: "cover", // or 'contain' based on your preference
    marginRight: 10, // add margin for spacing between image and text
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
  ourImage: {
    width: "90%",
    height: "23%",
    paddingVertical: "35%",
  },
  buttonContainer: {
    backgroundColor: "black",
    width: "30%",
    padding: 6,
    alignItems: "center",
    marginHorizontal: "6%",
    marginTop: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    width:'80%'
  },
  sub_text: {
    fontSize: 20,
    color: "white",
    width: "70%",
    textAlign: "center",
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
  // rotateText: {
  //   transform: [{ rotate: '0deg' }], // Adjust the angle as needed
  //   fontSize: 10,
  //    textAlignVertical: 'center',
  //   fontWeight: '500',
  // },
});
