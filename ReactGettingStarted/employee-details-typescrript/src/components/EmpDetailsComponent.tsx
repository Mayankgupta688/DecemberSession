import React, { ButtonHTMLAttributes } from "react";
import { IncrementalProgramOptions } from "typescript";

interface IEmployee {
    name: string;
    id: string;
    avatar: string;
    createdAt?: string
}

interface IState {
    employeeList: IEmployee[],
    counter: number
}

interface IProps {
    counter: string;
    userName: string
}

export default class EmpDetailsComponent extends React.Component<IProps, IState> {
    state: IState = {
        employeeList: [{
            name: "Mayank",
            id: '1',
            avatar: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
            createdAt: "Today"
        }, {
            name: "Mayank",
            id: '1',
            avatar: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
        }], counter: 0
    }
    constructor(props: IProps) {
        super(props);
        this.updateUser = this.updateUser.bind(this)
    }

    updateUser= (id: string) => {
        console.log(this.state.employeeList.length);
    }

    render() {
        return (
            <div>
                Counter: {this.state.counter}<br/><br/><hr/>
                <h1>This is Employee Listing...{this.props.userName}</h1>
                <input type="button" value="Click for Alert" id="sample_button" onClick={() => this.updateUser("ahsgdsid")} />
                <ShowData></ShowData>
                <ShowDataOther></ShowDataOther>
            </div>
        )
    }
}


var ShowData: React.FunctionComponent = () => {
    return <h1>Hello All</h1>
}

var ShowDataOther = (props: any) => {
    return <h1>Hello All {props.name}</h1>
}