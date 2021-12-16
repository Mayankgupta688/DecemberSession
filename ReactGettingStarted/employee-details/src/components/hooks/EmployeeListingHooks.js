import React, { useState, useEffect } from "react";
import "../InterpolatingDataComponent.css";
import Axios from "axios";

export default function EmployeeListingHooks() {

    var [employeeList, setEmployeeList] = React.useState([]);
    var [currentTime,setCurrentTime] = useState(getCurrentTime());
    var [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("Data Called....")   

        return () => {
            console.log("Effect Reversed...")
        }
    })

    useEffect(() => {
        Axios.get("http://localhost:4000/employees").then((response) => {
            setEmployeeList(response.data)
        })

        return () => {
            // console.log("ComponentWillUnmount")
        }
    }, [])

    useEffect(() => {
        console.log("time Re rendered...")

        return () => {
            console.log("ahsfjkgd")
        }
    }, [counter])

    function getCurrentTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    }

    setTimeout(() => {
        // setCurrentTime(getCurrentTime());
    }, 1000);

    function getEventDetails(event) {
        var updatedList = employeeList.filter((emp) => {
            return emp.id !== event.target.id
        })

        setEmployeeList(updatedList);
    }

    function incrementCounter() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <DisplayUpdatedTime time={currentTime}></DisplayUpdatedTime>
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
            <input type="button" onClick={incrementCounter} value="Increment Counter" />
        </div>
    )
}


function DisplayUpdatedTime(props) {
    return <h2>Current Updated Time is {props.time}</h2>
}