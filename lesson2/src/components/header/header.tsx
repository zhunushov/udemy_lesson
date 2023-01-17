import { Link } from "react-router-dom";

import "./header.css";

const Header = ({ onServiceChange }: any) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to={"/"}>Star DB</Link>
      </h3>
      <ul className="d-flex">
        <Link to={"/1/"}>
          <li>People</li>
        </Link>
        <Link to={"/2/"}>
          <li>Planets</li>
        </Link>
        <Link to={"/3/"}>
          <li>Starships</li>
        </Link>
      </ul>
      <button onClick={onServiceChange} className="btn btn-primary btn-sm">
        Change Service
      </button>
    </div>
  );
};

export default Header;
