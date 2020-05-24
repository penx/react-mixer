import React from "react";
import { View } from "react-native";

export const TrackPanel = ({ children }) => (
  <View
    style={{
      height: 320,
      width: 60,
      backgroundColor: "#aaa",
      margin: 1,
      position: "relative",
    }}
  >
    {children}
  </View>
);

const TOP_HEIGHT = 60;
export const TrackPanelTop = ({ children }) => (
  <View style={{ height: TOP_HEIGHT, top: 0, left: 0, position: "absolute" }}>
    {children}
  </View>
);
const MIDDLE_HEIGHT = 200;
export const TrackPanelMiddle = ({ children }) => (
  <View
    style={{
      height: MIDDLE_HEIGHT,
      top: TOP_HEIGHT,
      left: 0,
      position: "absolute",
    }}
  >
    {children}
  </View>
);
const BOTTOM_HEIGHT = 60;
export const TrackPanelBottom = ({ children }) => (
  <View
    style={{
      height: BOTTOM_HEIGHT,
      top: TOP_HEIGHT + MIDDLE_HEIGHT,
      left: 0,
      position: "absolute",
    }}
  >
    {children}
  </View>
);
