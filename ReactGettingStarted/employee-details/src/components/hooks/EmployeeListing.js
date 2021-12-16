import React, { useState, useEffect } from "react";
import "./EmployeeListing.css";
import "../InterpolatingDataComponent.css";  
import WorkingWithForms from "./WorkingWithForms";
import Axios from "axios";

export default function EmployeeListing() {

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
        var updatedList = employeeList.filter((emp) => {
            return emp.id !== event.target.id
        })

        setEmployeeList(updatedList);
    }

    return (
        <div>
            <WorkingWithForms getEmployeeList={getEmployeeList}></WorkingWithForms>
            { employeeList.map((emp, index) => {
                return (
                    <div className="card">
                        <img src={emp.avatar} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{emp.name + " " + index}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <input type="button" id={emp.id} value={"Delete " + emp.name} onClick={getEventDetails} className="btn btn-primary" />
                        </div>
                    </div>
                )
            })}<br/>
        </div>
    )
}