import React from "react";
import ReactDom from "react-dom";
import App from "./App";

/** 外にコンポーネント化したため不要
const App = () => {
  return (
    //<React.Fragment>
    <>
      <h1>ma!</h1>
      <p>mi!!</p>
    </>
    //</React.Fragment>
  );
};*/

ReactDom.render(<App />, document.getElementById("root"));
