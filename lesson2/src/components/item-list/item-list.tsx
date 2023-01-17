import { FC } from "react";
import PropTypes from "prop-types";
import "./item-list.css";

interface MyProps {
  onItemSelected(id: string): void;
  getData(): Promise<any[]>;
  children: any;
  data: any[];
}
const ItemList: FC<MyProps> = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li
        key={id}
        className="list-group-item"
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });
  return <ul className="list-group">{items}</ul>;
};
ItemList.defaultProps = {
  onItemSelected: () => {},
};
ItemList.propTypes = {
  // onItemSelected: PropTypes.func
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
};
export default ItemList;
