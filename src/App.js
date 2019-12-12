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
        text,
        isToggle: false
      })
    });
  };

  handleRemove = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  handleToggle = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isToggle: !todo.isToggle };
        } else {
          return todo;
        }
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
          <TodoList todos={todos} onRemove={this.handleRemove} onToggle={this.handleToggle} />
        </div>
      </div>
    );
  }
}

export default App;
