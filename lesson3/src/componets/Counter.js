import React from "react";
import { connect } from "react-redux";
import { countActions } from "../hooks/useCountActions";

const Counter = ({ count, inc, dec, rnd }) => {
  return (
    <div className="bg-light">
      <h2>{count}</h2>
      <button onClick={dec} className="btn btn-primary btn-lg">
        DEC
      </button>
      <button onClick={inc} className="btn btn-primary btn-lg">
        INC
      </button>
      <button onClick={rnd} className="btn btn-primary btn-lg">
        RND
      </button>
    </div>
  );
};

export default connect((count) => ({ count }), countActions)(Counter);

// const mapStateToProps = (state) => {
//     return {
//       count: state,
//     };
//   };
//   const mapDispatchToProps = () => {
//     const actions = countActions();
//     return {
//       ...actions,

//     };
//   };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
