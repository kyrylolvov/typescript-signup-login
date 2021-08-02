interface meType {
  type: string;
  payload: {
    message: string;
    status: string;
  };
}

const MeReducer = (
  state = { message: "Loading data, please wait...", status: null },
  action: meType
) => {
  switch (action.type) {
    case "USER_ME":
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default MeReducer;
