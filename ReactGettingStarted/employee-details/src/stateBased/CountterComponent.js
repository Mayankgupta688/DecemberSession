import React, { Component } from "react";

export default class UpdateCounterClass extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    incrementValue = () => {
        this.setState({
            counter:this.state.counter + 1
        })
    }
    render() {
        return (
            <div>
                <h1>Counter Value is {this.state.counter}</h1>
                <input type="button" 
                       onClick={this.incrementValue} 
                       value="Increment Counter" />
            </div>
        )
    }
}