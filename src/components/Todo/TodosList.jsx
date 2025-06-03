import React, {Component} from "react";

class ListTodos extends Component{

    constructor(props){
        super(props);

        this.state = {
            todos: [
                {id:1, description: "Learn React", done: false, targetDate: new Date()},
                {id:2, description: "Become Java Expert", done: false, targetDate: new Date()},
                {id:3, description: "Learn Springboot", done: false, targetDate: new Date()},
                {id:4, description: "Learn JPA ", done: false, targetDate: new Date()}
            ]
        }
    }

    render(){
        return(
            <div>
                <h1>Todo list</h1>
                <table>
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
        )
    }
}

export default ListTodos;