import React, {Component} from "react";
import TodoDataSrevice from "../../api/todo/TodoDataSrevice";
import AuthenticationService from "./AuthenticationService";

class ListTodos extends Component{

    constructor(props){
        console.log("constructor");
        super(props);

        this.state = {
            todos: [],
            message: null
        }

        this.deleteTodo = this.deleteTodo.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this);
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
        this.refreshTodos();
        console.log(this.state);
    }

    refreshTodos(){
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

    deleteTodo(id){
       let user = AuthenticationService.getLoggedInUser();
    //    console.log(id, user); 
    TodoDataSrevice.deleteTodo(user, id)
    .then(
        response => {
            this.setState({message: `The todo ${id} is delete successfully.`})
            this.refreshTodos();
        }
    )
    }

    render(){
        console.log("render");
        return(
            <div>
                <h1>Todo list</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Is Completed</th>
                            <th>Target Date</th>
                            <th>Actions</th>
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
                            <td><div><button className="btn btn-warning" onClick={()=> this.deleteTodo(todo.id)}>Delete</button></div></td>
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