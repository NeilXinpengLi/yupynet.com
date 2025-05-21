import React from "react";
import rioticon from "../images/Rioticon.webp"; // 请放图片到 public/images 或 src/images 下

function BottomRight() {
  return (
    <div className="bottom-right">
      <img src={rioticon} alt="FrIoT" />
      <div>Free U3U</div>
    </div>
  );
}

export default BottomRight;
