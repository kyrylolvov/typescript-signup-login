import authentification from "../api/authentification";

export const handleSignUp =
  (email: String, password: String) => async (dispatch: Function) => {
    await authentification
      .post("/sign_up", {
        email: email,
        password: password,
      })
      .then((res) => dispatch({ type: "USER_SIGNUP", payload: res.data }));
  };

export const handleLogIn =
  (email: String, password: String) => async (dispatch: Function) => {
    await authentification
      .post(`/login?email=${email}&password=${password}`, {
        params: { email: email, password: password },
      })
      .then((res) => dispatch({ type: "USER_LOGIN", payload: res.data }));
  };
