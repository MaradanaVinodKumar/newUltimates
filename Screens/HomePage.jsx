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
import FlipCard from "react-native-flip-card";
import { Video } from "expo-av";
import Header from "./Header";
import vision from "../assets/eye.png";
import mission from "../assets/target.png";
import value from "../assets/diamond.png";
import ourService1 from "../assets/our-service1.jpeg";
import ourService2 from "../assets/our-service2.jpeg";
import ourService3 from "../assets/our-service3.webp";
import Welcome from "../Components/Welcome";
import PromiseText from "../Components/PromiseText";
import { useNavigation } from "@react-navigation/native";
import Cards1 from "./Cards1";
import MyCarousel from "./MyCarousel";

// import { Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const navigation = useNavigation();

  const sample = require("../assets/video1.mp4");
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
      <Header />
      <ScrollView>
        <SafeAreaView>
          <View>
            <Video
              // ref={videoRef}
              source={sample}
              isMuted={true}
              resizeMode="cover"
              shouldPlay={true}
              isLooping={true}
              useNativeControls={false}
              style={styles.backgroundVideoContainer}
            />

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
        <FlipCard
          style={styles.card}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
        >
          <View style={styles.view}>
            <Image source={vision} style={styles.image} />
            <Text style={{ fontSize: 20, color: "white", fontWeight: "900" }}>
              OUR VISION
            </Text>
          </View>
          <View style={styles.view_black}>
            <Text style={styles.backText}>
              Our vision is simple. We strive to over-deliver in every area that
              we serve the Central Ohio market. This includes how we deal with
              homeowners and the quality we deliver both in materials and
              workmanship.{" "}
            </Text>
          </View>
        </FlipCard>
        <FlipCard
          style={styles.card}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
        >
          <View style={styles.view_white}>
            <Image source={mission} style={styles.image} />
            <Text style={{ fontSize: 20, color: "black", fontWeight: "900" }}>
              OUR MISSION
            </Text>
          </View>
          <View style={styles.view_mission_black}>
            <Text style={styles.backText}>
              Provide our service in such a way to respect the homeowner the
              same way as you would a close family member.{" "}
            </Text>
          </View>
        </FlipCard>
        <FlipCard
          style={styles.card}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
        >
          <View style={styles.view}>
            <Image source={value} style={styles.image} />
            <Text style={{ fontSize: 20, color: "white", fontWeight: "900" }}>
              OUR VALUE
            </Text>
          </View>
          <View style={styles.view_black}>
            <Text style={styles.backText}>
              Value is not merely defined by price. Value is the combination of
              competitive pricing coupled with superior quality and that’s the
              value you can expect.
            </Text>
          </View>
        </FlipCard>
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

        <Cards1 />
        <MyCarousel />
        <PromiseText />
      </ScrollView>
      <ScrollView></ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundVideoContainer: {
    flex: 1,
    height: 715,
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
});
