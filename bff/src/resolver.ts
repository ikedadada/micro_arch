import { ContextType } from "./context";
import { Book } from "./types";

export const resolvers = {
  Query: {
    book: async (
      parent: unknown,
      args: { id: number },
      context: ContextType
    ) => {
      const response = await context.dataSources.catalogueApi.getBook(args.id);
      return response;
    },
    books: async (parent: unknown, args: unknown, context: ContextType) => {
      const response = await context.dataSources.catalogueApi.listBooks();
      return response;
    },
  },
};

const books: Book[] = [
  {
    id: 1,
    title: "The Awakening",
    author: "Kate Chopin",
    price: 1000,
  },
];
