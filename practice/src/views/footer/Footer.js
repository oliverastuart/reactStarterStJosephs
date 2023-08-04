import React from "react";
import { PRUSSIAN_BLUE, WHITE, YELLOW } from "../../resources/constants/Theme";

export default function Footer({ yearProp }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: PRUSSIAN_BLUE,
        color: WHITE,
      }}
    >
      Copyright {yearProp}, all rights reserved
    </div>
  );
}
