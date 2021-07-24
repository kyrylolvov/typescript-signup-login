import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path={["/", "/signup"]} exact component={SignUp} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
