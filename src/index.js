import React from "react";
import ReactDOM from "react-dom";

const fName = "diba";
const lName = "od";
const luckyNum = Math.floor(Math.random() * 23);

ReactDOM.render(
  <div>
    <h1>
      Hello everyone, i am {`${fName} ${lName}`}!
    </h1>
    <p>my lucky number is {luckyNum}</p>
  </div>,
  document.getElementById("root")
);
