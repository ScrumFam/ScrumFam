import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login Page/Login';
import Signup from './Sign Up Page/Signup';
import MainContainer from './containers/MainContainer'

function App() {
  return(
    <div className="test_div">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/home" render={() => <MainContainer />} />
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App;