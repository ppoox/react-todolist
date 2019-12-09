import React, { Component } from "react";
import "./App.css";
import CreateFrom from "./components/CreateForm";
import TodoList from "./components/TodoList";

class App extends Component {
  id = 1;
  state = {
    todos: []
  };

  handleInsert = text => {
    this.setState({
      todos: this.state.todos.concat({
        id: this.id++,
        text
      })
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <h3>TODO LIST</h3>
        <CreateFrom onInsert={this.handleInsert} />
        <div>
          <TodoList todos={todos} />
        </div>
      </div>
    );
  }
}

export default App;
