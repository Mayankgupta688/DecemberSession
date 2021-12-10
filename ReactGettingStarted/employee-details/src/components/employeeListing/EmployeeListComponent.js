import empList from "../../data/employeeList";
import employeeList from "../../data/employeeList";
import "../InterpolatingDataComponent.css";

export default function EmployeeListComponent() {

    var employeeList = empList;

    function getEventDetails(event, employeeId) {
        debugger;
        employeeList = employeeList.filter((emp) => {
            return emp.id !== employeeId
        })

        alert(employeeList.length)

    }

    return (
        <div>
            { employeeList.map((emp, index) => {
                return (
                    <div className="card">
                        <img src={emp.avatar} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{emp.name + " " + index}</h5>
                            
                            { +emp.id % 2 === 1 && <h6>Employee Id is Odd</h6>}
                            { +emp.id % 2 === 0 && <h6>Employee Id is Even</h6>}

                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <input type="button" id={emp.id} value={"Delete " + emp.name} onClick={function(event) { getEventDetails(event, emp.id)}} className="btn btn-primary" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}