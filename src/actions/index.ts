import axios from "axios";
import authentification from "../api/authentification";

export const handleSignUp =
  (email: string, password: string) => async (dispatch: Function) => {
    await authentification
      .post("/sign_up", {
        email: email,
        password: password,
      })
      .then((res) => dispatch({ type: "USER_SIGNUP", payload: res.data }));
  };

export const handleLogIn =
  (email: string, password: string) => async (dispatch: Function) => {
    await authentification
      .post(`/login?email=${email}&password=${password}`, {
        params: { email: email, password: password },
      })
      .then((res) => dispatch({ type: "USER_LOGIN", payload: res.data }));
  };

export const handleFetchData =
  (accessToken: string, refreshToken: string) => async (dispatch: Function) => {
    authentification.interceptors.response.use((response) => {
      if (response.data.statusCode === 200) {
        console.log("valid");
        dispatch({ type: "USER_ME", payload: response });
      } else {
        console.log("invalid");
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
