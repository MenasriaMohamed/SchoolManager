import React,{ Component } from "react";
import { Routes } from "../../Constantes/Routes";
import { Link } from "react-router-dom";
import sendAsync from "../../Server/Renderer";
import { saveFromLoginPage } from "./../../Controllers/AuthController";



export class LoginPage extends Component{
    constructor(props){
        super(props)
        this.state = {username:'', password:'', errors:{}, toggle:{password:'password'}}
    }
    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    toggleType = (input)=>{
        var toggle = this.state.toggle || {}
        toggle[input] = toggle[input] === 'text' ? 'password' : 'text'
        this.setState({toggle})
    }
    doLogin = (e)=>{
        e.preventDefault()
        e.stopPropagation()
        
        sendAsync({
            ControllerName: "UserController",
            FunctionName: "login",
            data: { username: this.state.username, password: this.state.password },
          })
            .then((result) => {
                if(result){   
                    if(result.errors){
                        this.setState({errors:result.errors})
                    }else{
                        this.setState({errors:{}})  
                        saveFromLoginPage(result.token, result.userId);
                 }
                }
          })
          .catch((err) => console.log(err));

    }
    hasErrors = (input)=>{
        return this.state.errors[input]
    }
    errorClass = (input)=>{
        if(this.hasErrors(input)) return ' has-error'
        return ''
    }
    ErrorText = ({input})=>{
        if(this.hasErrors(input))
            return (<small id={input+"Help"} className="form-text text-danger">{this.state.errors[input]}</small>)
        return ''
    }
    render = ()=>{
        return (
        
            <div className="container container-login animated fadeIn">
                <h3 className="text-center">Se connecter</h3>
                <form method='POST' onSubmit={this.doLogin} className="login-form">
                    <div className={"form-group"+this.errorClass('username')}>
					    <label htmlFor="username" className="placeholder"><b>Nom d'utilisateur</b></label>
					    <input value={this.state.username} onChange={this.onChange}  id="username" name="username" type="text" className="form-control"/>
                        <this.ErrorText input='username'></this.ErrorText>
				    </div>
                    <div className={"form-group"+this.errorClass('password')}>
                        <label htmlFor="password" className="placeholder"><b>Mot de passe</b></label>
                        <div className="position-relative">
                            <input value={this.state.password} onChange={this.onChange} id="password" name="password" type={this.state.toggle['password']} className="form-control"/>
                            <div className="show-password" onClick={()=>{this.toggleType('password')}}>
                                <i className="flaticon-interface"></i>
                            </div>
                        </div>
                        <this.ErrorText input='password'></this.ErrorText>
				    </div> 
                    <div className="row form-sub m-0">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="rememberme"/>
                            <label className="custom-control-label" htmlFor="rememberme">Se souvenir de moi</label>
                        </div>
                        <button href="#" className="btn-link float-right">Mot de passe oublie ?</button>
                    </div>
                    <div className="text-center">
                        <this.ErrorText input='all'></this.ErrorText>
                    </div>
                    <div className="form-action mb-3">
                        <button href="#" className="btn btn-primary btn-rounded btn-login">Se connecter</button>
                    </div>
                    <div className="login-account">
                        <span className="msg">vous n'avez pas de compte ?</span>
                        <Link id="show-signup" to={Routes.register}> Creer un compte</Link>
                    </div>
                </form>
            </div>
        )
    }
}


               