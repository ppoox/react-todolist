import React, { Component } from "react";
import "./CreateFrom.css";

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

    this.props.onInsert(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div className="form-container">
        <form className="insert" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">저장</button>
        </form>
      </div>
    );
  }
}

export default CreateFrom;
