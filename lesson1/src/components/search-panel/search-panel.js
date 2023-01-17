import React, { Component } from "react";
import "./search-panel.css";
export default class SearchPanel extends Component {
  state = {
    term: "",
  };
  onSearchChange = ({ target: { value } }) => {
    this.setState({ term: value });
    this.props.onSearchChange(value);
  };
  render() {
    return (
      <input
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onSearchChange}
        value={this.state.term}
      />
    );
  }
}
