import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  // constructor() {
  //   super();
  //   this.onLabelClick = () => {
  //     console.log("done:", this.props.label);
  //   };
  //   this.state = {
  //     done: false
  //   }
  // }

  render() {
    const {
      label,
      onDeletedItem,
      onToggleDone,
      onToggleImportant,
      important,
      done,
    } = this.props;
    // console.log(important, done);

    const className = `todo-list-item ${done && "done"} ${
      important && "important"
    }`;

    return (
      <span className={`${className} d-flex justify-content-between`}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <span>
          <button
            onClick={onToggleImportant}
            type="button"
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation" />
          </button>
          <button
            onClick={onDeletedItem}
            type="button"
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />X
          </button>
        </span>
      </span>
    );
  }
}
