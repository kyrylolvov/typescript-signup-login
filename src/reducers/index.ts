import { combineReducers } from "redux";
import SignUpReducer from "./SignUpReducer";

export default combineReducers({
  SignUpInfo: SignUpReducer,
});
