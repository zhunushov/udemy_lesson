const updateCartItems = (cartItems, item, idx) => {
  if (!item.count) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }
  if (idx < 0) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;
  const book = books.find(({ id }) => id === bookId);
  const idx = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[idx];
  const updatedItem = updateCartItem(book, item, quantity);
  return {
    ...state,
    cartItems: updateCartItems(cartItems, updatedItem, idx),
  };
};

export const updateShoppinCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }
  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);
    case "BOOK_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);
    case "ALL_BOOK_REMOVED_FROM_CART":
      const {
        shoppingCart: { cartItems },
      } = state;
      const item = cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count || 1);
    default:
      return state.shoppingCart;
  }
};
