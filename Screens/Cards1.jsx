import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import FlipCard from "react-native-flip-card";
import support from "../assets/support.png";
import cf from "../assets/cf.png";
import quality from "../assets/quality.png";
import pricing from "../assets/pricing.png";

export default function Cards1() {
  return (
    <SafeAreaView style={{ marginTop:'15%' }}>
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
          <Image source={support} style={styles.image} />
          <Text style={{ fontSize: 20, color: "white", fontWeight: "900" }}>
            EXPANDING GOAL
          </Text>
        </View>
        <View style={styles.view_black}>
          <Text style={styles.backText}>
            Our goal as well as primary source for new customers is to do a job
            so well that as a homeowner you would be proud and even compelled to
            recommend our service to those whom you know.
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
          <Image source={cf} style={styles.image} />
          <Text style={{ fontSize: 20, color: "black", fontWeight: "900" }}>
            CUSTOMER FOCUSED
          </Text>
        </View>
        <View style={styles.view_mission_black}>
          <Text style={styles.backText}>
            Most of our business comes from referrals. That would not be
            possible if we did not put the customer first. Check out our Better
            Business Bureau link which we proudly display on the primary
            navigation at the top of this page.
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
          <Image source={quality} style={styles.image} />
          <Text style={{ fontSize: 20, color: "white", fontWeight: "900" }}>
            QUALITY DRIVEN
          </Text>
        </View>
        <View style={styles.view_black}>
          <Text style={styles.backText}>
            We take care of the small details as well as the large ones. We
            treat each and every home as if it were our own. By maintaining that
            standard, we assure our customers that quality is always the top
            priority.
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
          <Image source={pricing} style={styles.image} />
          <Text style={{ fontSize: 20, color: "black", fontWeight: "900" }}>
            COMPETITIVE PRICING
          </Text>
        </View>
        <View style={styles.view_mission_black}>
          <Text style={styles.backText}>
            Despite our over-the-top quality and attention to detail, we never
            lose sight of delivering value. That’s why we price our services to
            be among the most competitive in Central Ohio.
          </Text>
        </View>
      </FlipCard>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "red",
  },
  view_white: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "white",
  },
  view_mission_black: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "black",
    borderColor: "red",
    borderWidth: 3,
  },
  view_black: {
    justifyContent: "center",
    alignItems: "center",
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
});
