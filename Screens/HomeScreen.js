import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import Header from "./Header";
import Video from 'react-native-video';
const vidPlayer = require("../assets/video.mp4");
const styles = StyleSheet.create({
  backgroundVideoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});


const videoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 250,
};

const viewStyle = {height: 250};
export default function HomeScreen() {
  return (
    <>
      <Header />

      <ScrollView style={styles.container}>
      {/* <View style={viewStyle}>
  <Video
    source={{
      uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    }}
    style={videoStyle}
    controls={true}
    resizeMode="cover"
    hideShutterView={true}
    paused={true}
  />
</View> */}
      </ScrollView>
    </>
  );
}
