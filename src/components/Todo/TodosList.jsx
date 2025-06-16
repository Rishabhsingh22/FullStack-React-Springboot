import React, {Component} from "react";
import TodoDataSrevice from "../../api/todo/TodoDataSrevice";
import AuthenticationService from "./AuthenticationService";

class ListTodos extends Component{

    constructor(props){
        console.log("constructor");
        super(props);

        this.state = {
            todos: [
                // {id:1, description: "Learn React", done: false, targetDate: new Date()},
                // {id:2, description: "Become Java Expert", done: false, targetDate: new Date()},
                // {id:3, description: "Learn Springboot", done: false, targetDate: new Date()},
                // {id:4, description: "Learn JPA ", done: false, targetDate: new Date()}
            ]
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");

    }

    // shouldComponentUpdate(nextProp, nextState){
    //     console.log("shouldComponentUpdate");
    //     console.log(nextProp);
    //     console.log(nextState);
    //     return false;
    // }

    componentDidMount(){
        console.log("componentDidMount");
        let user = AuthenticationService.getLoggedInUser();
        TodoDataSrevice.retrieveAllTodos(user)
        .then(
            response=>{
                // console.log(response)
                this.setState(()=>{
                    return {todos: response.data}
                })
            }
        )
    }

    render(){
        console.log("render");
        return(
            <div>
                <h1>Todo list</h1>
                <div className="container">
                    <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Is Completed</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                            todo => <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toString()}</td>
                        </tr>
                            )
                        }
                        
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ListTodos;