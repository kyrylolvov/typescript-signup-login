interface signUpType {
  type: string;
  payload: { message: string };
}

export default (
  state = { message: "Enter your credentials to sign up" },
  action: signUpType
) => {
  switch (action.type) {
    case "USER_SIGNUP":
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};
