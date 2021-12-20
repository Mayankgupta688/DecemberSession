function CustomisedComponen(props) {
    return (
        <div>
            <b>User name: (props.name}</b>
            <b>User age: {props.age}</b>
            <b>User designation: {props.designation}</b>
        </div>
// The component below is the optimised version for the Default Componenent
// The Component will not re-render if same props value for "name" property
var memoComponent = React.memo (CustomisedComponent);