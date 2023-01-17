import React from "react";
import "./app-header.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="d-flex app-header">
      <h1>My Todo List</h1>
      {/* <br /> */}
      <p>{`${toDo} more to do, ${done} done`}</p>
    </div>
  );
};

export default AppHeader;
