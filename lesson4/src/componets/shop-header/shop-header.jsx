import "./shop-header.css";

const ShopHeader = (props) => {
  return (
    <header className="shop-header d-flex">
      <a href="# " className="logo text-dark">
        Re Store
      </a>
      <a href="# ">
        <i className="cart-icon fa fa-shopping-cart" />
        {props.numItems} Items (${props.total})
      </a>
    </header>
  );
};

export default ShopHeader;
