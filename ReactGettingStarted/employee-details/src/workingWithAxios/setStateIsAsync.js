import React from 'react';

export default class SetStateIsAsync extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }

        debugger;
        this.setState({
            counter: 1
        })

        setTimeout(() => {
            alert(this.state.counter)
        }, 5000)
    }

    render() {
        debugger;
        return <h1>The Counter Value is {this.state.counter}</h1>
    }
}