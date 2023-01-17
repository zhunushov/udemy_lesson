import { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };
  onLabelChange = ({ target: { value } }) => {
    this.setState({
      label: value,
    });
  };
  onLabelSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({ label: "" });
  };
  render() {
    return (
      <form onSubmit={this.onLabelSubmit} className="item-add-form d-flex">
        <input
          type="text"
          className="form-control"
          value={this.state.label}
          onChange={this.onLabelChange}
          placeholder="What needa to be done"
        />
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}
