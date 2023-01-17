import React, { ComponentType } from "react";
import { BooksServiceConsumer } from "../bookstore-service-context";

interface BaseProps {}

export const withBooksStoreService = () => (Wrapped: ComponentType<any>) => {
  return (props: BaseProps) => {
    return (
      <BooksServiceConsumer>
        {(booksService) => <Wrapped {...props} booksService={booksService} />}
      </BooksServiceConsumer>
    );
  };
};
