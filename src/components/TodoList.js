import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todo-list">
        {todos.map(todo => {
          return <TodoItem key={todo.id} text={todo.text} />;
        })}
      </div>
    );
  }
}

export default TodoList;
