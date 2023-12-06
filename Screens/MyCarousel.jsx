import React from "react";
import { View, ViewPropTypes } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default function MyCarousel() {
  const images = [
    require("../assets/c1.jpeg"),
    require("../assets/c2.jpeg"),
    require("../assets/c3.jpeg"),
    require("../assets/c4.jpeg"),
  ];

  return (
    <View style={{ marginTop: "10%" }}>
      <SliderBox
        images={images}
        sliderBoxHeight={200}
        dotColor="red"
        inactiveDotColor="black"
        paginationBoxVerticalPadding={10}
        autoplay
        autoplayInterval={1500}
        circleLoop
      />
    </View>
  );
}
