import React from "react";

const ColorfulMessages = (props) => {
  const { color, children } = props;
  const contentBoyStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentBoyStyle}>{children}</p>;
};
export default ColorfulMessages;
