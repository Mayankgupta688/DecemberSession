import SubChildComponent from "./SubChildComponent";

export default function ChildComponent(props) {

    if(!props.name) {
        alert("Name is not There")
    } else {
        alert("Value is: " + props.name)
    }

    return (
        <div>
            <h2>This is Child Component {props.name}</h2><hr/>
            <SubChildComponent dataForSubChild={props.dataForSubChild}></SubChildComponent>
        </div>
    )
}