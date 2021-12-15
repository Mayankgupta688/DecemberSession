import { useState } from "react";

export default function CounterComponent () {
    debugger;
    const[counter, setCounter] = useState(0);
    setTimeout(() => {
        setCounter(counter+1);
    }, 1000);
    return <h1>Counter :{counter} </h1>
}

