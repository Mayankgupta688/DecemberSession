import React from "react";

export default class ParentChild extends React.Component {

    constructor() {
        super();
        this.state = {
            time: this.getCurrentTime()
        }

        setInterval(() => {
            debugger;
            this.setState({
                time: this.getCurrentTime()
            })
        }, 1000)
    }

    getCurrentTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    }

    render() {
        return (
            <div>
                <h1>This is Parent Component</h1>
                <ChildComponentClass time={this.state.time}></ChildComponentClass>
            </div>
        )
    }
}

class ChildComponentClass extends React.Component {
    render() {
        return <h2>Current Time from Class Based is {this.props.time}</h2>
    }
}

function ChildComponent(props) {
    return <h2>Current Time is {props.time}</h2>
}