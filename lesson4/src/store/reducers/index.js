import { updateBookList } from "./book-reducer";
import { updateShoppinCart } from "./cart-reducer";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppinCart(state, action),
  };
};

export default reducer;
