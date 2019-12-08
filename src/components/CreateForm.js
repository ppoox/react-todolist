import React, { Component } from "react";
import "./CreateFrom.css";

class CreateFrom extends Component {
  render() {
    return (
      <div className="form-container">
        <div className="insert">
          <input type="text" id="text" />
          <button type="submit">저장</button>
        </div>
      </div>
    );
  }
}

export default CreateFrom;
