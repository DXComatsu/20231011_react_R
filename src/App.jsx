import React from "react";
import ColorfulMessagesR from "./component/coRessages";
import ColorfulMessages from "./component/colofulMessages";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  const contentrenaStyle = {
    color: "pink",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Boi!!</h1>
      <p style={contentStyle}>17day?</p>
      <p style={contentrenaStyle}>of course</p>
      <ColorfulMessagesR color="blue" messages="I will take you on my dick!" />
      <ColorfulMessagesR color="pink" messages="sounds good" />
      <ColorfulMessages color="blue">
        I drink it spilled out Bagna Cauda sauce from your pussy
      </ColorfulMessages>

      <button onClick={onClickButton}>pussy!</button>
    </>
  );
};

export default App;
