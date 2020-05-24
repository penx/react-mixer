import React from "react";
import { View } from "react-native";

export const Mixer = ({ children }) => (
  <View
    style={{
      height: 320,
      backgroundColor: "#666",
      flex: 1,
      flexDirection: "row",
    }}
  >
    {children}
  </View>
);
