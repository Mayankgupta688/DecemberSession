import React, {useState} from "react";

var GlobalData = React.createContext();
var GlobalDataMiddle = React.createContext();

export default function GrandParent()  {
    const [details, setDetials] = useState({
        userName: "TechnoFunnel",
        native: "Haryana"
    })

    function updateNative() {
        setDetials({
            details,
            native: "Delhi"
        })
    }

    return (
        <GlobalData.Provider value={{details: details, updateNative: updateNative}}>
            <h1>This is Grand Parent Component Hooks {details.native}</h1>
            <input type="button" value="Click to Update Village" onClick={updateNative}/><hr/>
            <Parent></Parent>
        </GlobalData.Provider>
    )
}

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            userAge: 10
        }
    }

    render() {
        return (
            <GlobalDataMiddle.Provider value={this.state}>
                <h2>This is Parent Component</h2><hr/>
                <ChildComponent></ChildComponent>
            </GlobalDataMiddle.Provider>
        )
    }
}

class ChildComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>This is Child Component</h3><hr/>
                <GrandChildComponent></GrandChildComponent>
            </div>
        )
    }
}


class GrandChildComponent extends React.Component {
    render() {
        return (
            <GlobalData.Consumer>
                {(context) => {

                    setTimeout(() => {
                        context.updateNative()
                    }, 5000)
                    return (
                        <div>
                            <h3>This is Grand Child Component {context.details.native}</h3><hr/>
                            <GrandGrandChildComponent></GrandGrandChildComponent>
                        </div>
                    )
                }}
            </GlobalData.Consumer>
        )
    }
}

class GrandGrandChildComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>This is Grand Grand Child Component</h3><hr/>
                <GlobalDataMiddle.Consumer>
                    {(context) => {
                        return <h5>This is Sample data from Other Context {context.userAge}</h5>
                    }}
                </GlobalDataMiddle.Consumer>
                <GrandGrandGrandChildComponent></GrandGrandGrandChildComponent>
            </div>
        )
    }
}


function GrandGrandGrandChildComponent(){
    return (
        <div>
            <h3>This is Grand Grand Grand Child Component Functional</h3><hr/>
            <GlobalData.Consumer>
                {(context) => {
                    return (
                        <h4>Data at last level {context.details.native}</h4>
                    )
                }}
            </GlobalData.Consumer>
        </div>
    )
}
