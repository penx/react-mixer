import React, { useState, useMemo } from "react";

import { View, PanResponder } from "react-native";

const HEIGHT = 200;

function onMove(gestureState) {
  const { barHeight } = this.state;
  const newDeltaValue = this.getValueFromBottomOffset(
    -gestureState.dy,
    barHeight,
    min,
    max
  );

  this.setState({
    deltaValue: newDeltaValue,
  });
}

export const VolumeSlider = ({ onChange, value, min = -128, max = 0 }) => {
  const panResponder = useMemo(() =>
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: (_, gestureState) => {
        onChange(
          Math.max(
            min,
            Math.min(max, value + ((max - min) * -gestureState.dy) / HEIGHT)
          )
        );
      },
      onPanResponderRelease: () => {},
      onPanResponderTerminate: () => {},
    })
  );

  return (
    <View
      style={{
        height: HEIGHT,
        width: 60,
        paddingLeft: 10,
        paddingRight: 10,
        position: "relative",
      }}
      {...panResponder.panHandlers}
    >
      <View
        style={{
          height: HEIGHT,
          zIndex: 1,
          borderWidth: 1,
          borderColor: "#000",
          borderRadius: 6,
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
};
