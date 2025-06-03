import React, {Component} from "react";
import Welcome from "./Welcome";

class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            hasLoginFailed: false,
            showLoginMessage: false
        }

    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);

    }

    // creating generic change function
    handleChange(event){
        // console.log(event.target.name,"",event.target.value);
        // console.log(this.state);
        this.setState(()=>{
            return {[event.target.name]: event.target.value}
        })
    }

    loginClicked(){
       console.log(this.state); 
       const { navigate } = this.props;
       if(this.state.username==="rishabh22" && this.state.password==="pass"){
        console.log("Successful"); 

        // this.props.history.push("/welcome"); // older version - REACT 5

        // This prop is injected from the HOC in WithNavigation component
        navigate(`/welcome/${this.state.username}`); // REACT 6 and newer version

        // this.setState(()=>{return {showLoginMessage: true}})
        // this.setState(()=>{return {hasLoginFailed: false}})
        }
       else {
        console.log("Failed"); 
        this.setState(()=>{return {showLoginMessage: false}})
        this.setState(()=>{return {hasLoginFailed: true}})
       }
        


    }

    // handleUsernameChange(event){
    //     console.log(event.target.value);
    //     this.setState(()=>{
    //         return {username: event.target.value}
    //     })
    // }
    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState(()=>{
    //         return {password: event.target.value}
    //     })
    // }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* conditional rendering */}
                {this.state.showLoginMessage && <div>Login Successful</div>}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Login Failed</div>}
                {/* <ShowLoginSuccessful showLoginMessage={this.state.showLoginMessage}/>
                <ShowInvalidLogin hasLoginFailed={this.state.hasLoginFailed}/> */}
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

// function ShowInvalidLogin(props){
//     if(props.hasLoginFailed){
//         return <div>Login Failed</div>;
//     }

//     return null;
// }
// function ShowLoginSuccessful(props){
//     if(props.showLoginMessage){
//         return <div>Login Successful</div>;
//     }

//     return null;
// }

export default Login