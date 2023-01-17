import { FC } from "react";
// import PropTypes from "prop-types";

interface MyProps {
  left?: JSX.Element;
  right?: JSX.Element;
}

const Row: FC<MyProps> = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};
// Row.propTypes = {
//   left: PropTypes.node,
//   right: PropTypes.node,
// };

export default Row;
