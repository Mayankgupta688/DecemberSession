import React from "react";
import empList from "../data/employeeList";
import "../components/InterpolatingDataComponent.css";
import { Subject } from "rxjs"

export default class EmployeeListingClass extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            employeeList: empList,
        }

        this.deleteAllEmployee = this.deleteAllEmployee.bind(this);
        this.notifySubject = new Subject();

        this.notifySubject.subscribe((data) => {

            if(data.type === "Add Employee") {
                this.setState({
                    employeeList: [...this.state.employeeList, {...data}]
                })
            }
            if(data === "Notify Parent for Data Update") {
                alert("Parent is notified....")
            }
        })

    }

    getEventDetails = (event) => {
        debugger;
        var updatedList = this.state.employeeList.filter((emp) => {
            return emp.id !== event.target.id
        })

        this.setState({
            employeeList: updatedList
        })
    }

    deleteAllEmployee() {
        this.setState({
            employeeList: []
        })
    }

    render() {
        debugger;
        return (
            <div>
                <EmployeeCountComponent deleteAll={this.deleteAllEmployee} empList={[...this.state.employeeList]} notifySubject={this.notifySubject}></EmployeeCountComponent>
                { this.state.employeeList.map((emp) => {
                    return (
                        <EmployeeDetails emp={emp} getEventDetails={this.getEventDetails}></EmployeeDetails>
                    )
                })}
                <OtherComponent  notifySubject={this.notifySubject}></OtherComponent>
            </div>
        )
    }
}

function EmployeeDetails(props) {
    debugger;
    return (
        <div className="card">
            <img src={props.emp.avatar} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.emp.name}</h5>

                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <input type="button" id={props.emp.id} value={"Delete " + props.emp.name} onClick={props.getEventDetails} className="btn btn-primary" />
            </div>
        </div>
    )
}

class EmployeeCountComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props.notifySubject.subscribe((data) => {
            debugger;
            if(data === "Call to Delete All") {
                this.props.deleteAll();
            }
            
        })
    }

    notifyOtherComponent = () => {
        this.props.notifySubject.next("Notify Sibling");
    }

    deleteAll = () => {
        this.props.deleteAll();
    }

    render() {
        return (
            <div>
        <h1>Employee Length: {this.props.empList.length}</h1>
        <input type="button" value="Delete All Employee" onClick={this.deleteAll} />
        <input type="button" value="Notify Sibling" onClick={this.notifyOtherComponent} />
        
            </div>
        )
    }
    
}

class OtherComponent extends React.Component {

    constructor(props) {
        super(props);
        this.tryCallingSibling = this.tryCallingSibling.bind(this)
        this.notifyParent = this.notifyParent.bind(this);

        this.props.notifySubject.subscribe((data) => {
            debugger;
            if(data === "Notify Sibling") {
                alert("Sibling is Notified...")
            }
        })
    }

    tryCallingSibling() {
        debugger;
        this.props.notifySubject.next("Call to Delete All");
    }

    notifyParent() {
        debugger;

        var data = {
            type: "Add Employee",
            name: "Anshul",
            avatar: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
            createdAt: "Today",
            id: 1000
        }
        this.props.notifySubject.next("Notify Parent for Data Update");
        debugger;
        this.props.notifySubject.next(data)
    }

    render() {
        return (
            <div>
                <h1>This is Other Component</h1>
                <input type="button" value="Delete Function Call Belonging to Employee Cpunt Component" onClick={this.tryCallingSibling} />
                <input type="button" value="Notify Parent" onClick={this.notifyParent} />
            </div>
        )
    }
}