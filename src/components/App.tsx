import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path={["/", "/signup"]} exact component={SignUp} />
          <Route path={["/login"]} exact component={LogIn} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
