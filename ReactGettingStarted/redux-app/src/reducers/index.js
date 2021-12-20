import { combineReducers } from "redux";
import EmployeeReducer from "./employee_reducer"

var rootReducer = combineReducers({
    employees: EmployeeReducer
})

export default rootReducer;