import axios from "axios";
import authentification from "../api/authentification";
import Main from "../api/mainApi";

const mainApi = Main.getInstance();

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
      console.log(response);
      dispatch({ type: "USER_LOGIN", payload: response });
    } catch (e) {
      console.log(e);
    }
  };

export const handleFetchData =
  (accessToken: string, refreshToken: string) => async (dispatch: Function) => {
    authentification.interceptors.response.use((response) => {
      if (response.data.statusCode === 200) {
        dispatch({ type: "USER_ME", payload: response });
      } else {
        axios({
          method: "post",
          url: "http://142.93.134.108:1111/refresh",
          headers: { Authorization: `Bearer ${refreshToken}` },
        }).then((res) => {
          localStorage.setItem("accessToken", res.data.body.access_token);
          localStorage.setItem("refreshToken", res.data.body.refresh_token);
          axios
            .get("http://142.93.134.108:1111/me", {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
              },
            })
            .then((reply) => dispatch({ type: "USER_ME", payload: reply }));
        });
      }
      return response;
    });
    await authentification.get("http://142.93.134.108:1111/me", {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
  };
