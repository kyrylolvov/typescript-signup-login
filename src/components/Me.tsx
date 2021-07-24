import React from "react";
import { connect } from "react-redux";
import { handleFetchData } from "../actions";

interface componentProps {
  handleFetchData: Function;
  message: string;
}

interface componentState {
  MeInfo: { message: string };
}

class Me extends React.Component<componentProps> {
  componentDidMount() {
    this.props.handleFetchData(
      localStorage.getItem("accessToken"),
      localStorage.getItem("refreshToken")
    );
  }

  render() {
    return (
      <div className="form__wrapper">
        <strong className="page__message">🔥 {this.props.message}</strong>
      </div>
    );
  }
}

const mapStateToProps = (state: componentState) => {
  return state.MeInfo;
};

export default connect(mapStateToProps, { handleFetchData })(Me);
