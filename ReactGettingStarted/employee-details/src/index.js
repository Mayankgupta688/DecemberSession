import React from "react";
import ReactDOM from "react-dom";

import Component from "./components/parentChildComponents/ParentComponent";

var randomData = {
    dataForChild: "Mayank Gupta",
    dataForSubChild: "TechnoFunnel",
    address: {
        street: "akshdjsagd",
        city: "ashfckncvkaf"
    }
}

var randomData2 = {
    dataForChild1: "Mayank Gupta",
    dataForSubChild1: "TechnoFunnel"
}

ReactDOM.render((
    <Component randomData={randomData} randomData2={randomData2}></Component>
), document.getElementById("root"));
