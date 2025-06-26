import React, {Component} from "react";
import TodoDataSrevice from "../../api/todo/TodoDataSrevice";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";

class ListTodos extends Component{

    constructor(props){
        console.log("constructor");
        super(props);

        this.state = {
            todos: [],
            message: null
        }

        this.deleteTodo = this.deleteTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this);
        this.addTodo = this.addTodo.bind(this);
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

    updateTodo(id){
        console.log("Update: ", id);
        const { navigate } = this.props;
        navigate(`/todos/${id}`)
    }
    addTodo(){
        console.log("Add: ");
        const { navigate } = this.props;
        navigate(`/todos/-1`)
    }

    render(){
        console.log("render");
        console.log(this.state);
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
                            <td>{todo.done!=null?todo.done.toString():'-'}</td>
                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                            <td><div>
                            <button className="btn btn-success" onClick={()=> this.updateTodo(todo.id)}>Update</button>
                            <button className="btn btn-warning" onClick={()=> this.deleteTodo(todo.id)}>Delete</button>
                            </div></td>
                        </tr>
                            )
                        }
                        
                    </tbody>
                </table>
                <div className="d-flex align-self-start ml-auto"><button className="btn btn-primary" onClick={this.addTodo}>Add Todo</button></div>
                </div>
            </div>
        )
    }
}

export default ListTodos;