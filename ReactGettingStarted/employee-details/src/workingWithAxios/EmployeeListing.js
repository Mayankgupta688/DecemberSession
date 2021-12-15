import Axios from "axios";
import "../components/InterpolatingDataComponent.css";

import React from 'react';

export default class EmployeeListingComponent extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            employeeList: [],
            counter: 0
        }
        this.getEventDetails = this.getEventDetails.bind(this);
        this.updateCounter = this.updateCounter.bind(this);
    }

    getEventDetails(event) {
        var updatedList = this.state.employeeList.filter((emp) => {
            return emp.id !== event.target.id
        })

        this.setState({
            employeeList: updatedList
        })

    }

    updateCounter() {
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            this.setState({
                counter: this.state.counter + 1
            }, () => {
                this.setState({
                    counter: this.state.counter + 1
                })
            })
        })
    }

    render() {
        debugger;
        return (
            <div>
                <h1>The List of employees is given below {this.state.counter}: </h1>
                <input type="button" onClick={this.updateCounter} value="Update Counter" /><br/><br/>
                { this.state.employeeList.map((emp, index) => {
                        return (
                            <div className="card" style={{display: "inline-block"}} key={index}>
                                <input type="text"  />
                                <img src="https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{emp.name}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <input id={emp.id} type="button" value={"Delete " + emp.name} onClick={this.getEventDetails} className="btn btn-primary" />
                                </div>
                            </div>
                        )
                })}
            </div>
        )
    }

    componentDidMount() {
        debugger;
        Axios.get("http://localhost:4000/employees").then((response) => {
            debugger
            console.dir(response)
            this.setState({
                employeeList: response.data
            })
        })
    }
} 