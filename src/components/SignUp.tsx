import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleSignUp } from "../actions";

interface componentProps {
  handleSignUp: Function;
  message: string;
}

interface componentState {
  SignUpInfo: { message: string };
  message: string;
}

class SignUp extends React.Component<componentProps> {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    this.props.handleSignUp(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="form__wrapper">
        <form className="form__section">
          <h1>Create an account 👋</h1>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button onClick={this.handleSubmit} className="submit__btn">
            Sign Up
          </button>
          <p className="form__message">
            {this.props.message}
            <Link to="/login">, proceed to login page</Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: componentState) => {
  return { message: state.SignUpInfo.message };
};

export default connect(mapStateToProps, { handleSignUp })(SignUp);
