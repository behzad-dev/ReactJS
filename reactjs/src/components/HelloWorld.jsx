import React from "react";
//Using CSS into jsx file
const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  textAlign: "center",
};
const HelloWorld = () => {
  return <div style={mystyle}>This is Hello World !</div>; // simply return a <div> and show on page
};
export default HelloWorld;
