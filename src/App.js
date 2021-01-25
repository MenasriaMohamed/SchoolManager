import React, { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createBrowserHistory } from "history";
import {Routes} from './Constantes/Routes'
import { Header } from "./Components/Shared/Header";
import { Sidebar } from "./Components/Shared/Sidebar";
import { AuthPage } from "./Pages/Auth/AuthPage";
import { Dashboard } from "./Pages/Dashboard";
import { PrivateRoute, PublicRoute, isLoggedIn } from "./Controllers/AuthController";
import {
  /*BrowserRouter as Router*/ Router,
  Switch,
  Redirect,
} from "react-router-dom";
import sendAsync from "./Server/Renderer";
const { app } = window.require("electron").remote;
const { StrictMode } = require("react");
export const history = createBrowserHistory();

function App() {
  
  // setState
  App.setState = useState(0)[1];

    return (
      <div>
        <Router history={history}>
          {isLoggedIn() && <Header></Header>}
          {isLoggedIn() && <Sidebar></Sidebar>}
          <Switch>
           <Redirect exact from={"/"} to={Routes.auth} />
           <PublicRoute path={Routes.auth} component={AuthPage}></PublicRoute>
           <div className="main-panel">
             <PrivateRoute path={Routes.dashboard} component={Dashboard}></PrivateRoute>
           </div>
          </Switch>
        </Router>    
        <ToastContainer newestOnTop></ToastContainer>
      </div>
    );

}

export default App;
