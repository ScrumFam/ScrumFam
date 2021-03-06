import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login Page/Login.jsx";
import Signup from "./Sign Up Page/Signup.jsx";
import MainContainer from "./containers/MainContainer.jsx";
import ParentAdminContainer from './containers/ParentAdminContainer.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/home" render={() => <MainContainer />} />
          <Route path="/adminPanel" render={() => <ParentAdminContainer />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
