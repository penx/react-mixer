import React, { useState } from "react";

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
      style={{
        height: HEIGHT,
        zIndex: 1,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 6,
      }}
      onPress={(e) => {
        return onChange(
          ((HEIGHT - e.nativeEvent.locationY) / HEIGHT) * (max - min) + min
        );
      }}
    />
    <View
      style={{
        width: 40,
        backgroundColor: "#F2A",
        touchEvents: "none",
        position: "absolute",
        left: 10,
        bottom: 0,
        height: HEIGHT * ((value - min) / (max - min)),
      }}
    />
  </View>
);
