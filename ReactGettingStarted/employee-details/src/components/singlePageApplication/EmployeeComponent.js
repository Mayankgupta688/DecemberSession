import React, { useState, useEffect } from "react";
import "../InterpolatingDataComponent.css";  
import DetailsComponentEmployee from "./DetailsComponentEmployee";
import Axios from "axios";

export default function EmployeeListing(props) {

    var [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        getEmployeeList();
    }, []);

    function getEmployeeList() {
        Axios.get("http://localhost:4000/employees").then((response) => {
            setEmployeeList(response.data)
        })
    }

    function getEventDetails(event) {
        props.history.push("/details/" + event.target.id)
    }

    return (
        <div>
            { employeeList.map((emp, index) => {
                return (
                    <DetailsComponentEmployee emp={emp} getEventDetails={getEventDetails}></DetailsComponentEmployee>
                )
            })}<br/>
        </div>
    )
}

