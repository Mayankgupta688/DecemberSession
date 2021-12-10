import React from "react";

export default class TimerComponent extends React.Component {

    getCurrentTime() {
        var currentDate = new Date();
        return currentDate.getHours() + " : " + currentDate.getMinutes() + " : " + currentDate.getSeconds();
    }

    constructor() {
        super();
        this.state = {
            time: this.getCurrentTime()
        }
        setInterval(() => {
            this.setState({
                time: this.getCurrentTime()
            })
            console.log(this.state.time);
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>Current Time is: {this.state.time}</h1>
            </div>
        )
    }
}