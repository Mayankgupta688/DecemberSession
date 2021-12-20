import "./EmployeeSyle.css";
import React from "react";
import Axios from "axios";

import { connect } from "react-redux";

import * as actions from "../action/employee_action";

class EmployeeListing extends React.Component {

    constructor() {
        super();
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount() {
        debugger;
        Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
            debugger;
            this.props.addEmployeeList(response.data)
        })
    }

    deleteEmployee(event) {
        this.props.deleteSpecificEmployee(event.target.id)
    }

    render() {
        debugger;
        return (
            <div>
                { this.props.employeeList.map((emp, index) => {
                    return (
                        <div className="card">
                            <img src={emp.avatar} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{emp.name + " " + index}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <input type="button" id={emp.id} value={"Delete " + emp.name} onClick={this.deleteEmployee}  className="btn btn-primary" />
                            </div>
                        </div>
                    )
                })}<br/>
            </div>
        )
    }
}

function mapStoretoProps(store) {
    return {
        employeeList: store.employees
    }
}


function mapDispatchToProps(store) {
    return {
        deleteSpecificEmp: actions.deleteSpecificEmployee,
        addEmployeeList: actions.addEmployeeList
    }
}

var ConnectedComponent = connect(mapStoretoProps, mapDispatchToProps)(EmployeeListing)

export default ConnectedComponent;