import React, {Component} from "react";
import Login from "./Login";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WithNavigation from "./WithNavigation";
import WithParams from "./WithParams";
import ListTodos from "./TodosList";

class TodoApp extends Component{
    
    render(){

    // creating const to use WithNavigation, WithParams HOC that includes
    // useNavigate, useParams hook respectively as prop
    const LoginComponentWithNavigation = WithNavigation(Login);
    const WelcomeComponentWithParams = WithParams(Welcome);

        return(
            <div className="todoApp">
                <Router>
                    <HeaderComponent/>
                    <Routes>
                    <Route path="/" exact element={<LoginComponentWithNavigation />}/>
                    <Route path="/login" element={<LoginComponentWithNavigation />}/>
                    {/* <Route path="/welcome" element={<Welcome/>}/> */} 
                    <Route path="/welcome/:name" element={<WelcomeComponentWithParams/>}/>
                    <Route path="/todos" element={<ListTodos/>}/>
                    <Route path="/logout" element={<LogoutComponent/>}/>
                    <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
                    <FooterComponent/>
                </Router>
                {/* <Login/>
                <Welcome/> */}
            </div>
        )
    }
}

function ErrorComponent(){
    return<div>An error occured. Contact admin support.</div>
}

class HeaderComponent extends Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="#" className="navbar-brand">Todo</a></div>
                    <ul className="navbar-nav">
                        <li ><Link className="nav-link" to="/welcome/rishabh22">Home</Link></li>
                        <li ><Link className="nav-link" to="/todos">Manage Todo</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li ><Link className="nav-link" to="/login">Login</Link></li>
                        <li ><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return(
            <footer className="footer">
                <span className="text-muted">All rights reserved 2025 @Todo.</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component{
    render(){
        return(
            <div>
                <h1>You are logged out.</h1>
                <div className="container">Thanks for visiting!!</div>
            </div>
        )
    }
}

export default TodoApp