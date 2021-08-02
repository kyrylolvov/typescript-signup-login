import axios from "axios";
import authentification from "../api/authentification";
import Main from "../api/mainApi";
import MainProtected from "../api/mainApiProtected";

const mainApi = Main.getInstance();
const mainApiProtected = MainProtected.getInstance();

export const handleSignUp =
  (email: string, password: string) => async (dispatch: Function) => {
    try {
      const response = await mainApi.signUp({ email, password });
      dispatch({ type: "USER_SIGNUP", payload: response });
    } catch (e) {
      console.log(e);
    }
  };

export const handleLogIn =
  (email: string, password: string) => async (dispatch: Function) => {
    try {
      const response = await mainApi.logIn({ email, password });
      dispatch({ type: "USER_LOGIN", payload: response });
    } catch (e) {
      console.log(e);
    }
  };

export const handleFetchData = () => async (dispatch: Function) => {
  try {
    const response = await mainApiProtected.getMe();
    dispatch({ type: "USER_ME", payload: response.body });
  } catch (error) {
    console.log(error);
  }
};
