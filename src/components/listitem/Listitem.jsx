import React, { useState } from "react";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import "./listitem.scss";

export default function Listitem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.youtube.com/watch?v=z5J7n5e6Mbs";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/7a/ST3LambertPoster.png"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />

          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14minutes</span>
              <span className="Limit">16+</span>
              <span>2000</span>
            </div>
            <div className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              iure qui praesentium quisqua....
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
