import React,{ Component } from "react";
import { Navigate, Route } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

class AuthenticatedRoute extends Component{

    render(){
        if(AuthenticationService.isUserLoggedIn()){
            console.log("AuthenticatedRoute- ",AuthenticationService.isUserLoggedIn())
            return {...this.props.children}
        //    return <Route {...this.props}/> // REACT-5
        }else{
            return <Navigate to="/login"/>
            //return <Redirect to="/login" /> //REACT-5
        }
    }

}
export default AuthenticatedRoute;