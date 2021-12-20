export default function EmployeeReducer(state=[], action) {
    debugger;

    if(action.type === "Add Employee List") {
        return action.payload;
    }

    if(action.type === "Delete Specific Employee") {
        var newState = state.filter((emp) => {
            return emp.id !== action.payload
        })

        return newState;
    }


    return state;
}