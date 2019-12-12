import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { todo, onRemove, onToggle } = this.props;

    return (
      <div className="todo-item">
        <div className={`text ${todo.isToggle ? "active" : ""}`} onClick={() => onToggle(todo.id)}>
          {todo.text}
        </div>
        <div className="remove" onClick={() => onRemove(todo.id)}>
          삭제
        </div>
      </div>
    );
  }
}

export default TodoItem;
