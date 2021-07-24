interface actionType {
  type: string;
  payload: { message: String };
}

export default (
  state = { message: "Enter your credentials to sign up" },
  action: actionType
) => {
  switch (action.type) {
    case "USER_SIGNUP":
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};
