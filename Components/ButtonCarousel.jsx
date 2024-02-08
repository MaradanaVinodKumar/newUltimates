import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { Video } from "expo-av";
import HauoraRegular from "../assets/Fonts/Hauora-Regular.ttf";
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'Hauora': HauoraRegular,
    // You can add more fonts here if needed
  });
}



const ButtonCarousel = () => {

  useEffect(() => {
    loadFonts();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [getVideoIndex, setVideoIndex] = useState(0);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const ref = useRef(null);
  const [getValue, setValue] = useState(10);

  const videos = [
    require("../assets/CarouselImages/v1.mp4"),
    require("../assets/CarouselImages/v2.mp4"),
    require("../assets/CarouselImages/v3.mp4"),
  ];

  const toRight = () => {
    if (getValue === 10) {
      setValue(400);
    } else if (getValue === 400) {
      setValue(790);
    } else if (getValue === 790) {
      setValue(10);
    }
    ref.current?.scrollTo({ x: getValue });
  };

  const toLeft = () => {
    if (getValue === 790) {
      setValue(400);
    } else if (getValue === 400) {
      setValue(10);
    } else if (getValue === 10) {
      setValue(790);
    }
    ref.current?.scrollTo({ x: getValue });
  };

  setTimeout(() => {
    ref.current?.scrollTo({ x: getValue });
  }, 1);

  return (
    <View style={{ marginTop: "10%", width: "100%", height: 250 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <View>
          <Text
            style={[
              styles.headerText,
              {
                fontFamily: "Hauora",
                color: "black",
                fontWeight: 600,
                fontSize: 20,
                marginTop: 0,
              },
            ]}
          >
            Featured Works
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={toLeft}>
            <Feather
              name="arrow-left-circle"
              size={30}
              style={{ color: "#3a3a3a", margin: 0 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toRight}>
            <Feather
              name="arrow-right-circle"
              size={30}
              style={{ color: "#3a3a3a", margin: 0 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        horizontal
        style={{ width: "100%" }}
        ref={ref}
        showsHorizontalScrollIndicator={true}
      >
        {videos.map((video, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              openModal(), setVideoIndex(index);
            }}
          >
            <View style={styles.ScrollVideoBackground}>
              <Video
                source={video}
                style={styles.ScrollVideo}
                resizeMode="cover"
                shouldPlay
                isLooping
                useNativeControls={false}
              />
              <Image
                source={require("../assets/CarouselImages/play.png")}
                style={styles.playButton}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Close Icon */}
            <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
              <Ionicons name="close-circle-outline" size={24} color="black" />
            </TouchableOpacity>

            {/* Video Player */}
            <Video
              source={videos[getVideoIndex]}
              style={styles.modelVideo}
              resizeMode="cover"
              shouldPlay
              isLooping
              useNativeControls={false}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  ScrollVideo: {
    flex: 1,
    resizeMode: "cover",
  },
  ScrollVideoBackground: {
    borderWidth: 0,
    height: "100%",
    overflow: "hidden",
    width: 370,
    marginHorizontal: 10,
    position: "relative",
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -25 }], // Center the play button
    width: 50,
    height: 50,
    zIndex: 1,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "500",
    lineHeight: 30,
    letterSpacing: 0.4,
    color: "#ffffff",
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modelVideo: {
    width: 300,
    height: 200,
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2, // Ensure the close icon is on top of the video
  },
});

export default ButtonCarousel;
