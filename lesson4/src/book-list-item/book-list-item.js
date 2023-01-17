import "./book-list-item.css";
const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="book-img" />
      </div>
      <div className="book-details">
        <a href="# " className="book-title">
          {title}
        </a>
        <div className="book-author">{author}</div>
        <div className="book-price">{price}$</div>
        <button onClick={onAddedToCart} className="btn btn-info add-to-card">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
