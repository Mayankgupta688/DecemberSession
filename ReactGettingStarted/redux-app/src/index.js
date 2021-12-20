import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";

import EmployeeListing from "./components/EmployeeListing";
import EmployeeCount from "./components/EmployeeCount";

var applicationStore = createStore(rootReducer);


ReactDOM.render((
    <div>
        <h1>This is Default Redux Application</h1>
        <Provider store={applicationStore}>
            <EmployeeListing></EmployeeListing>
            <EmployeeCount></EmployeeCount>
        </Provider>
        <h2>This is not using Store Data</h2>
    </div>
    
    
), document.getElementById("root"))