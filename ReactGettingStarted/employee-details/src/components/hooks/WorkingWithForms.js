import Axios from "axios";
import { useState } from "react";

export default function WorkingWithForms(props) {

    var [user, setUser] = useState({
        name: "Mayank",
        id: 100,
        avatar: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
        createdAt: "Today"
    });

    function updateData(event) {

        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
        
    }

    function addEmployee() {
        Axios.post("http://localhost:4000/employees", user, {
            headers: {
                
            }
        }).then(() => {
            alert("Employee Added Successfully");
            props.getEmployeeList();
        }, () => {
            alert("Some Error")
        })
    }

    return (
        <div id="form_element">
            <label>Enter Name</label><input name="name" type="text" value={user.name} onChange={updateData}></input> { user.name === "" && <label style={{color: "red"}} >Enter Valid Name</label>}<br/><br/>
            <label>Enter Id</label><input name="id" type="text" value={user.id} onChange={updateData}></input> { user.id > 100 && <label style={{color: "red"}} >Enter Valid Id less than 100</label>}<br/><br/>
            <label>Enter Avatar</label><input name="avatar" type="text" value={user.avatar} onChange={updateData}></input><br/><br/>
            <input type="button" disabled={user.name === "" || user.id > 100} value="Submit" onClick={addEmployee} />
        </div>
    )
}