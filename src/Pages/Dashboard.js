import React,{ Component } from "react";
import { CountCards } from "../Components/Dashboard/CountCards";
import {Routes} from '../Constantes/Routes'
import { Link } from "react-router-dom";
export class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {           
        }
    }
    render = ()=>{
        return (
        <>
            <div className="content">
                <div className="page-inner">
                        <div className="page-header d-flex justify-content-end">
                            <ul className="breadcrumbs">                       
                                <li className="nav-item ">
                                <Link to={Routes.dashboard}>لوحة القيادة</Link>
                                </li>  
                                <li className="separator">
                                    <i className="flaticon-left-arrow"></i>
                                </li>                            
                                <li className="nav-home">
                                <Link to={Routes.dashboard}>
                                        <i className="flaticon-home"></i>
                                </Link>
                              </li>
                            </ul> 
                            <h4 className=" ml-3 page-title">لوحة القيادة</h4>
                        </div>
                        {/* COUNT CARDS*/}
                        <CountCards></CountCards>
                </div>
            </div>
        </>
        )
    }
}