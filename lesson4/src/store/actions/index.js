export const booksLoaded = (newBooks) => ({
  type: "FETCH_BOOKS_SUCCESS",
  payload: newBooks,
});
export const booksRequested = () => ({
  type: "FETCH_BOOKS_REQUEST",
});
export const booksError = (error) => ({
  type: "FETCH_BOOKS_FAILURE",
  payload: error,
});
export const bookAddedToCart = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId,
  };
};
export const bookRemovedToCart = (bookId) => {
  return {
    type: "BOOK_REMOVED_FROM_CART",
    payload: bookId,
  };
};
export const allBookRemovedToCart = (bookId) => {
  return {
    type: "ALL_BOOK_REMOVED_FROM_CART",
    payload: bookId,
  };
};
export const fetchBooksOld =
  ({ getBooks }, dispatch) =>
  () => {
    dispatch(booksRequested());
    dispatch(booksLoaded(getBooks()));
  };
export const fetchBooks =
  ({ getBooks }) =>
  () =>
  (dispatch) => {
    dispatch(booksRequested());
    dispatch(booksLoaded(getBooks()));
  };
