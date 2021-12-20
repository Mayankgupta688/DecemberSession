import "./EmployeeSyle.css";
import React from "react";
import { connect } from "react-redux";

class EmployeeCount extends React.Component {

    render() {
        debugger;
        return (
            <div>
                <h1>Employee Count: {this.props.employeeList.length}</h1>
            </div>
        )
    }
}

function mapStoretoProps(store) {
    return {
        employeeList: store.employees
    }
}

var ConnectedComponent = connect(mapStoretoProps, null)(EmployeeCount)

export default ConnectedComponent;