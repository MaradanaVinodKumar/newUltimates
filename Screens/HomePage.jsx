import React from "react";
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
import ourService1 from "../assets/our-service1.jpeg";
import ourService2 from "../assets/our-service2.jpeg";
import ourService3 from "../assets/our-service3.webp";
import Welcome from "../Components/Welcome";
import PromiseText from "../Components/PromiseText";
import { useNavigation } from "@react-navigation/native";
import Cards1 from "./Cards1";
import Cards2 from "./Cards2";
import MyCarousel from "./MyCarousel";

// import { Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const navigation = useNavigation();

  const sample = require("../assets/video2.gif");
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
  //         console.error("Error playing video:", error);
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

      <ScrollView>
        <SafeAreaView>
          <View>
            <Image source={sample} style={styles.backgroundVideoContainer} />
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>
                ATLAS ROOFING & SIDING{"\n"}
                <Text style={{ fontSize: 20 }}>
                  Roofing & Siding At Its Best
                </Text>
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  width: "30%",
                  padding: 6,
                  width: "75%",
                  alignItems: "center",
                  marginVertical: "16%",
                  marginTop: -18,
                }}
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
            Atlas Roofing and Siding{" "}
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
          Atlas Roofing &amp; Siding is your storm damage expert. When storms
          strike and there’s hail damage, wind damage, and more..{" "}
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
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
          Atlas is proud to offer our customers products that have earned the
          government’s ENERGY STAR label. Atlas ENERGY STAR qualified products.
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
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
          Atlas Roofing and Siding offers a complete line of high-quality siding
          products including, Vinyl, James Hardie, and LP Smartside.
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
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
        <Cards2 />
        <MyCarousel />
        <PromiseText />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundVideoContainer: {
    flex: 1,
    height: 450,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
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
    backgroundColor: "red",
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
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the overlay color and opacity as needed
    // Add any additional styling for the overlay view
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
    backgroundColor: "rgba(255, 255, 255, 0)", // Set the desired transparency here
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    color: "black", // Set the desired text color
    borderColor: "red",
    borderWidth: 5,
    color: "white",
    marginHorizontal: "5%",
    padding: "5%",
    backgroundColor: "rgba(30, 30, 42, 0.57)",
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
