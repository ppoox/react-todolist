import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { text } = this.props;

    return (
      <div className="todo-item">
        <h3>{text}</h3>
      </div>
    );
  }
}

export default TodoItem;
