import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import promise1 from "../assets/promise1.jpg";

export default function PromiseText() {
  return (
    <View style={{ marginTop: 35 }}>
      <Text style={styles.heading}>OUR ATLAS PROMISE TO OUR CUSTOMERS</Text>
      <Text style={styles.para}>
        <Text style={{ color: "red", fontWeight: "bold" }}>
          Install the best!{" "}
        </Text>
        We install only the best products in the business. The Atlas Shingles
        have the longest warranties in their class. Our siding and window
        products are the industry’s best! Our windows were crowned Consumers
        Digest Best Buy!
      </Text>
      <Text style={styles.para}>
        <Text style={{ color: "red", fontWeight: "bold" }}>
          Make the experience for thr homeowner a positive one.{" "}
        </Text>
        We try to make the experience as least intrusive on your family as
        possible. We send a large enough crew to finish most jobs in one day. If
        you are going to be inconvenienced – make it as short a time span as
        possible! Our crews are very respectful of your property and as a
        result, we work quickly, quietly, and professionally.
      </Text>
      <Text style={styles.para}>
        <Text style={{ color: "red", fontWeight: "bold" }}>
          Clean-up is critical.{" "}
        </Text>
        When we leave the job – it should be in better condition than when we
        started. Every detail is important including using a magnetic roller to
        pick up any loose nails. We move the dumpster in and out the same day so
        you don’t have a big clunky trash bin on your property longer than you
        have to.
      </Text>
      <View>
        <Image
          source={promise1} // Update with your image URL
          style={styles.ourImage}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: "5%",
  },
  para: {
    fontSize: 15,
    marginHorizontal: "5%",
    marginVertical: "3%",
  },
  ourImage: {
    width: "90%",
    height: "20%",
    paddingVertical: "35%",
    marginTop: 30,
    marginHorizontal: "5%",
  },
});
