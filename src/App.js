import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import TodoApp from './components/Todo/Todo'

class App extends Component {
  render(){
    return (
    <div className="App">
      {/* <Counter/> */}
      <br></br>
      <TodoApp/>
    </div>
  );
  }
}

export default App;
