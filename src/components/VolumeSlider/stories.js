import React, { useState } from "react";

import { action } from "@storybook/addon-actions";

import { VolumeSlider } from ".";

export default {
  title: "VolumeSlider",
};

export const Example = () => {
  const [vol1, setVol1] = useState(-64);
  const [vol2, setVol2] = useState(-32);
  return (
    <>
      <VolumeSlider value={vol1} onChange={setVol1} />
      <VolumeSlider value={vol2} onChange={setVol2} />
    </>
  );
};
