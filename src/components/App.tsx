import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LogIn from "./LogIn";
import Me from "./Me";
import SignUp from "./SignUp";
import "./Form.css";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path={["/", "/signup"]} exact component={SignUp} />
          <Route path={["/login"]} exact component={LogIn} />
          <Route path={["/me"]} exact component={Me} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
