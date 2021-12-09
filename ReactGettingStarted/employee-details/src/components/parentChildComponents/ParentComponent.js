import ChildComponent from "./ChildComponent";

export default function ParentComponent(props) {

    var finalData = {
        ...props.randomData,
        ...props.randomData2,
        ...props.randomData.address,
        address: null
    }
    
    return (
        <div style={{border: "1px solid red", padding: "10px"}}>
            <h1>This is Parent Component {props.randomData.dataForChild}</h1><hr/>
            <ChildComponent {...finalData}></ChildComponent>
        </div>
    )
}