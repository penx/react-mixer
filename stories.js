import React, { useState } from "react";

import { action } from "@storybook/addon-actions";

import { Mixer } from "./components/Mixer";
import {
  TrackPanel,
  TrackPanelTop,
  TrackPanelMiddle,
  TrackPanelBottom,
} from "./components/TrackPanel";
import { VolumeSlider } from "./components/VolumeSlider";

export default {
  title: "App",
};

export const Example = () => {
  const [vol1, setVol1] = useState(-64);
  const [vol2, setVol2] = useState(-32);
  return (
    <Mixer>
      <TrackPanel>
        <TrackPanelTop>Top</TrackPanelTop>
        <TrackPanelMiddle>
          <VolumeSlider value={vol1} onChange={setVol1} />
        </TrackPanelMiddle>
        <TrackPanelBottom>Bottom</TrackPanelBottom>
      </TrackPanel>
      <TrackPanel>
        <TrackPanelMiddle>
          <VolumeSlider value={vol2} onChange={setVol2} />
        </TrackPanelMiddle>
      </TrackPanel>
    </Mixer>
  );
};
