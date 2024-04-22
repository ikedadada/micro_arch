import gql from "graphql-tag";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}

interface Query {
  book(id: number): Book;
  books: Book[];
}

export const typeDefs = gql`
  type Book {
    id: Int
    title: String
    author: String
    price: Int
  }

  type Query {
    book(id: Int): Book
    books: [Book]
  }
`;
