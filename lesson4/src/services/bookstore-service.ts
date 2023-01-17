import { Component } from "react";

export default class BookstoreService extends Component {
  getBooks() {
    return [
      {
        id: 1,
        price: 200,
        title: "Text log book test",
        author: " Hello m ia as as ",
        coverImage:
          "https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612",
      },
      {
        id: 2,
        price: 120,
        title: "sadas  asdg book test",
        author: " Hello m ia as as ",
        coverImage:
          "https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?s=612x612",
      },
    ];
  }
}
