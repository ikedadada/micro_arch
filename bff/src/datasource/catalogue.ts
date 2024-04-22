import { BookServiceClient } from "../gen/catalogue_grpc_pb";
import * as grpc from "@grpc/grpc-js";
import { GetBookRequest, ListBooksRequest } from "../gen/catalogue_pb";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}

export class CatalogueDataSource {
  private client: BookServiceClient;

  constructor() {
    this.client = new BookServiceClient(
      "localhost:50051",
      grpc.credentials.createInsecure()
    );
  }

  async getBook(id: number): Promise<Book> {
    const request = new GetBookRequest();
    request.setId(id);
    return new Promise((resolve, reject) => {
      this.client.getBook(request, (error, response) => {
        if (error) return reject(error);
        const book = response.getBook();
        if (!book) return reject(new Error("Book not found"));
        return resolve({
          id: book.getId(),
          title: book.getTitle(),
          author: book.getAuthor(),
          price: book.getPrice(),
        });
      });
    });
  }

  async listBooks(): Promise<Book[]> {
    return new Promise((resolve, reject) => {
      const request = new ListBooksRequest();
      this.client.listBooks(request, (error, response) => {
        if (error) return reject(error);
        const books = response.getBooksList();
        return resolve(
          books.map((book) => ({
            id: book.getId(),
            title: book.getTitle(),
            author: book.getAuthor(),
            price: book.getPrice(),
          }))
        );
      });
    });
  }
}
