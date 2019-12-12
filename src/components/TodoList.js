import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todos, onRemove, onToggle } = this.props;
    return (
      <div className="todo-list">
        {todos.map(todo => {
          return <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />;
        })}
      </div>
    );
  }
}

export default TodoList;
