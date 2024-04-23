import { useQuery } from "@apollo/client/react/hooks";
import { gql } from "@apollo/client/core";
import type { MetaFunction } from "@remix-run/node";
import type { Book } from "~/types/Book";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const LIST_BOOKS = gql`
  query ListBooks {
    books {
      id
      title
      author
      price
    }
  }
`;

export default function Index() {
  const { loading, error, data } = useQuery<{ books: Book[] }>(LIST_BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No books found</p>;

  const books = data.books;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td align="right">{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
