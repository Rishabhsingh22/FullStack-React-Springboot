import React, {Component} from "react";

class ListTodos extends Component{

    constructor(props){
        super(props);

        this.state = {
            todos: [
                {id:1, description: "Learn React"},
                {id:2, description: "Become Java Expert"},
                {id:3, description: "Learn Springboot"},
                {id:4, description: "Learn JPA "}
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo=> <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
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