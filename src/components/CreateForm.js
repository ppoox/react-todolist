import React, { Component } from "react";
import "./CreateFrom.css";
import { create } from "../store/modules/todo";
import { connect } from "react-redux";

class CreateFrom extends Component {
  state = {
    text: ""
  };
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.text === "" || this.state.text === undefined) {
      return false;
    }

    this.props.onInsert(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div className="form-container">
        <form className="insert" onSubmit={this.handleSubmit}>
          <input type="text" id="text" name="text" value={this.state.text} onChange={this.handleChange} />
          <button type="submit">저장</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
  create: () => dispatch(create())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateFrom);
