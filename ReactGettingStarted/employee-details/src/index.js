import React from "react";
import ReactDOM from "react-dom";

import component, { HeaderComponent } from "./components/HeaderComponent";

import ContentComponent from "./components/ContentComponent";
import FooterComponent from "./components/FooterComponent";

alert(component)

ReactDOM.render((
    <div>
        <h1>These are the Application Components</h1><hr/>
        <HeaderComponent></HeaderComponent><hr/>
        <ContentComponent></ContentComponent><hr/>
        <FooterComponent></FooterComponent><hr/>
    </div>
), document.getElementById("root"));
