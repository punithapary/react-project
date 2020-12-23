  import React, { Component } from "react";
  import Aboutus from "./containers/Aboutus";
  import Contactus from "./containers/Contactus";
  import Welcome from "./containers/Welcome";
  import Register from "./containers/Register";
  import { ROUTES } from "./consts";
  import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
  import Login from "./containers/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <Switch> 
          <Route  path={ROUTES.CONTACT} component={Contactus} />
          <Route  path={ROUTES.WELCOME} component={Welcome} />
           <Route  path={ROUTES.REGISTER} component={Register} />
          <Route  path={ROUTES.LOGIN} component={Login} />
          <Route exact path={ROUTES.ABOUTUS} component={Aboutus} />
        </Switch> 
      </BrowserRouter > 
    );
  }
}

export default App;
