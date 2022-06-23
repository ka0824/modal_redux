import { combineReducers } from "redux";
import modalReducer from "../slice/modalSlice";

const rootReducer = combineReducers({
  modalReducer,
});

export default rootReducer;
