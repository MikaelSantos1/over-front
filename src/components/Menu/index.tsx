import { ChevronDownIcon } from "@chakra-ui/icons";
import { MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import videojs from 'video.js';
let Button = videojs.getComponent("Button");

  let SettingsButton = videojs.extend(Button, {
    constructor: function (player, options) {
      Button.call(this, player, options);

      // ADD UNIQUE CLASS TO THE CUSTOM BUTTON
      this.addClass("vjs-setting-button");
    },
    handleClick: function () {
      console.log("Settings button clicked");
    },
  });

  videojs.registerComponent("SettingsButton", SettingsButton);

  player.getChild("ControlBar").addChild("SettingsButton", {}, 2);