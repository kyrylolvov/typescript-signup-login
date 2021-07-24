import { combineReducers } from "redux";
import LogInReducer from "./LogInReducer";
import SignUpReducer from "./SignUpReducer";

export default combineReducers({
  SignUpInfo: SignUpReducer,
  LogInInfo: LogInReducer,
});
