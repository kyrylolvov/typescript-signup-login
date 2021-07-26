interface signUpType {
  type: string;
  payload: { message: string };
}

const SignUpReducer = (
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

export default SignUpReducer;
