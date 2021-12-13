import React from "react";
import empList from "../data/employeeList";
import "../components/InterpolatingDataComponent.css";

export default class EmployeeListingClass extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            employeeList: empList,
            counter: this.props.counter,
            currentTime: this.getCurrentTime()
        }

        setInterval(() => {
            debugger;
            this.setState({
                currentTime: this.getCurrentTime()
            })
        }, 1000)

        this.getEventDetails = this.getEventDetails.bind(this);
    }

    getCurrentTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    }

    getEventDetails(event) {
        var updatedList = this.state.employeeList.filter((emp) => {
            return emp.id !== event.target.id
        })

        this.setState({
            employeeList: updatedList
        })

    }

    render() {
        debugger;
        return (
            <div>
                <h1>Counter is {this.state.counter}</h1>
                <DisplayUpdatedTime time={this.state.currentTime}></DisplayUpdatedTime>
                { this.state.employeeList.map((emp, index) => {
                    return (
                        <div className="card">
                            <img src={emp.avatar} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{emp.name + " " + index}</h5>
                                
                                { +emp.id % 2 === 1 && <h6>Employee Id is Odd</h6>}
                                { +emp.id % 2 === 0 && <h6>Employee Id is Even</h6>}
    
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <input type="button" id={emp.id} value={"Delete " + emp.name} onClick={this.getEventDetails} className="btn btn-primary" />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}


function DisplayUpdatedTime(props) {
    return <h2>Current Updated Time is {props.time}</h2>
}