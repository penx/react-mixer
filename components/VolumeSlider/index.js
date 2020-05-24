import React from "react";

import { View, TouchableOpacity } from "react-native";

const HEIGHT = 200;

export const VolumeSlider = ({ onChange, value, min = -128, max = 0 }) => (
  <View
    style={{
      height: HEIGHT,
      width: 60,
      paddingLeft: 10,
      paddingRight: 10,
      position: "relative",
    }}
  >
    <TouchableOpacity
      style={{ height: "100%", zIndex: 1, outline: "1px solid black" }}
      onPress={(e) =>
        onChange(
          ((HEIGHT - e.nativeEvent.locationY) / HEIGHT) * (max - min) + min
        )
      }
    />
    <View
      style={{
        width: 40,
        backgroundColor: "#22A",
        touchEvents: "none",
        position: "absolute",
        bottom: 0,
        height: HEIGHT * ((value - min) / (max - min)),
      }}
    />
  </View>
);
