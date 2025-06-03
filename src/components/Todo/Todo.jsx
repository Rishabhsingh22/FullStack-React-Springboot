import React, {Component} from "react";
import Login from "./Login";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WithNavigation from "./WithNavigation";
import WithParams from "./WithParams";
import ListTodos from "./Todos";

class TodoApp extends Component{
    
    render(){

    // creating const to use WithNavigation, WithParams HOC that includes
    // useNavigate, useParams hook respectively as prop
    const LoginComponentWithNavigation = WithNavigation(Login);
    const WelcomeComponentWithParams = WithParams(Welcome);

        return(
            <div className="todoApp">
                <div className="title">Todo App</div>
                <Router>
                    <Routes>
                    <Route path="/" exact element={<LoginComponentWithNavigation />}/>
                    <Route path="/login" element={<LoginComponentWithNavigation />}/>
                    {/* <Route path="/welcome" element={<Welcome/>}/> */} 
                    <Route path="/welcome/:name" element={<WelcomeComponentWithParams/>}/>
                    <Route path="/todos" element={<ListTodos/>}/>
                    <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
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

export default TodoApp