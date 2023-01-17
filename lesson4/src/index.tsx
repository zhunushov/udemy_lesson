import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./componets/app";
import { BooksServiceProvider } from "./componets/bookstore-service-context";
import ErrorBoundry from "./componets/error-boundry";
import BookstoreService from "./services/bookstore-service";
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BooksServiceProvider value={new BookstoreService({})}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BooksServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
);
