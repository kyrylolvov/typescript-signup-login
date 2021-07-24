interface logInType {
  type: string;
  payload: {
    message: string;
    body: {
      status: string;
      access_token: string;
      refresh_token: string;
    };
  };
}

export default (
  state = { message: "Enter your credentials to log in" },
  action: logInType
) => {
  switch (action.type) {
    case "USER_LOGIN":
      if (action.payload.body.status === "error") {
        return {
          message: "Password is wrong",
        };
      } else {
        console.log(action.payload);
        return {
          ...state,
          message: "You have logged in successfuly",
          accessToken: action.payload.body.access_token,
          refreshToken: action.payload.body.refresh_token,
        };
      }

    default:
      return state;
  }
};
