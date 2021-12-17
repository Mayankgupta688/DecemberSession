import React from 'react';

export default class HelpComponent extends React.Component {

    goBack = () => {
        debugger;
        console.dir(this.props);
        this.props.history.goBack();
    }

    render() {
        debugger;
        return (
            <div style={{padding: "10px", border: "1px solid red", height: "200px", margin: "15px"}}>
                <input type="button" value="Go Back" onClick={this.goBack} />
                <p>This is Help Component</p>
            </div>
        )
    }

    componentWillUnmount() {
        console.log("Component Unmounted....")
    }
}