import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BookListItem from "../book-list-item";
import ErrorIndicator from "../componets/error-indicator";
import { withBooksStoreService } from "../componets/hoc";
import Spinner from "../componets/spinner";
import { bookAddedToCart, fetchBooks } from "../store/actions";
import { compose } from "../utils";
import "./book-list.css";

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const BookList = ({ books, onAddedToCart }) => {
  if (!books) return;
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id}>
          <BookListItem
            book={book}
            onAddedToCart={() => onAddedToCart(book.id)}
          />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ bookList }) => ({
  ...bookList,
});

const mapDispatchToProps = (dispatch, { booksService }) => {
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(booksService),
      onAddedToCart: bookAddedToCart,
    },
    dispatch
  );
};

export default compose(
  withBooksStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
