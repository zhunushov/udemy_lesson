import { connect } from "react-redux";
import {
  allBookRemovedToCart,
  bookAddedToCart,
  bookRemovedToCart,
} from "../../store/actions";
import "./shopping-cart-table.css";

const ShoppingCartTable = (props) => {
  const { items, total, onDelete, onDecrease, onIncrease } = props;
  const renderRow = (item, inx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{inx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            del
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart }) => {
  const { cartItems, orderTotal } = shoppingCart;
  return {
    items: cartItems,
    total: orderTotal,
  };
};
const mapDispatchToProps = {
  onDelete: allBookRemovedToCart,
  onDecrease: bookRemovedToCart,
  onIncrease: bookAddedToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
