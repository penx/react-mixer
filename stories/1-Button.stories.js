import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "react-native";

export default {
  title: "Button",
  component: Button,
};

export const Text = () => (
  <Button title="Hello Button" onPress={action("clicked")} />
);

export const Emoji = () => (
  <Button title=" 😀 😎 👍 💯" onPress={action("clicked")} />
);
