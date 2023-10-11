import React from "react";

const ColorfulMessagesR = (props) => {
  const { color, messages } = props;
  const contentBoyStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentBoyStyle}>{messages}</p>;
};
export default ColorfulMessagesR;
