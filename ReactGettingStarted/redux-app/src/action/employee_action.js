export function addEmployeeList(empList) {
    debugger;
    return {
        type: "Add Employee List",
        payload: empList
    }
}

export function deleteAllEmployee() {
    return {
        type: "Delete Employee List",
    }
}

export function deleteSpecificEmployee(empId) {
    return {
        type: "Delete Specific Employee",
        payload: empId
    }
}