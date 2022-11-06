import { combineReducers } from "redux";
import ProjectReducer from "./ProjectReducer";

const rootReducer = combineReducers({
    ProjectReducer: ProjectReducer
})

export default rootReducer