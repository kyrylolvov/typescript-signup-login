import { combineReducers } from "redux";
import LogInReducer from "./LogInReducer";
import MeReducer from "./MeReducer";
import SignUpReducer from "./SignUpReducer";

export default combineReducers({
  SignUpInfo: SignUpReducer,
  LogInInfo: LogInReducer,
  MeInfo: MeReducer,
});
