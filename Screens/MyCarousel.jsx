import React from "react";
import { View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default function MyCarousel() {
  const images = [
    require("../assets/icon.png"),
    require("../assets/cf.png"),
    require("../assets/diamond.png"),
    require("../assets/eye.png"),
  ];

  return (
    <View style={{ marginTop: "10%" }}>
      <SliderBox
        images={images}
        sliderBoxHeight={200}
        sliderBoxWidth={150}
        dotColor="red"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
      />
    </View>
  );
}
