import React,{ Component } from "react";
import {toast} from 'react-toastify'
//import { RegisterPage } from "./RegisterPage";
import { LoginPage } from "./LoginPage";
import { Route } from "react-router-dom";
import {Routes} from '../../Constantes/Routes'
import './LoginPage.css';
export class AuthPage extends Component{
    toaster = ()=>{
        toast('toast test',
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: false
            }
        );
    }
    render = ()=>{
        return (
                <div className="login bg-image">
                    <div className="wrapper wrapper-login">
                    <LoginPage></LoginPage>
                        {/* {[Routes.login, Routes.auth].map((path)=>{
                            return <Route exact path={path} component={()=>(<LoginPage></LoginPage>)}></Route>
                        })} */}
                        {/* <Route path={Routes.register} component={()=>(<RegisterPage></RegisterPage>)}></Route> */}
                    </div>
                </div>
        )
    }
}