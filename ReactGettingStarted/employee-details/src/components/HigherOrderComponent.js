import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return <h1>This is Simple Component</h1>
    }
}

class OtherComponent extends React.Component {
    render() {
        return <h1>This is Simple Component</h1>
    }
}


function higherOrderFunction(Component, ComponentOne) {
    return class extends React.Component {

        constructor() {
            super();
            this.state = {
                someData: ""
            }
        }

        updateData() {

        }
        render() {
            return (
                <div>
                    <h1>This is Higher Order Component</h1>
                    <ComponentOne data={this.state.someData} updateData={updateData}></ComponentOne>
                    <Component></Component>
                </div>
            )
        }
    }
}

var OtherComponent = higherOrderFunction(HelloWorld, OtherComponent)
export default OtherComponent;