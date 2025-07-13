import axios from "axios";

class TodoDataService{

    retrieveAllTodos(name){
        // let username = 'rishabh22'
        // let password = 'dummy'
        // let basicAuthHeader = 'BAsic ' + window.btoa(username +":"+password)
    return axios.get(`http://localhost:8080/users/${name}/todos`
        // ,
        // {
        //     headers:{
        //         Authorization: basicAuthHeader
        //     }
        // }
    )
    }
    retrieveTodo(name, id){
    return axios.get(`http://localhost:8080/users/${name}/todos/${id}`)
    }
    deleteTodo(name, id){
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }
    updateTodo(name, id, todo){
    return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo)
    }
    createTodo(name, todo){
    return axios.post(`http://localhost:8080/users/${name}/todos/`, todo)
    }

}
export default new TodoDataService();