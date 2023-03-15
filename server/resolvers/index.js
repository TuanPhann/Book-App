import AuthorModel from "../models/AuthorModule.js";
import BookModel from "../models/BookModel.js";

export const resolvers = {
  Query: {
    books: async () => {
      const books = await BookModel.find();
      return books;
    },
    authors: async () => {
      const author = await AuthorModel.find();
      return author;
    },
    book: async (parent, args) => {
      const book = await BookModel.findById(args.bookId);
      return book;
    },
    author: async (parent, args) => {
      const author = await AuthorModel.findById(args.authorId);
      return fakeData.author.find((author) => author.id === args.authorId);
    },
  },
  Book: {
    author: async (parent, args) => {
      const author = await AuthorModel.findOne({
        _id: parent.authorId,
      });
      return author;
    },
  },
  Author: {
    book: async (parent, args) => {
      const books = await BookModel.find({
        authorId: parent.id,
      });
      return books;
    },
  },
  Mutation: {
    addBook: async (parent, args) => {
      const newBook = new BookModel(args);
      await newBook.save();
      return newBook;
    },
    addAuthor: async (parent, args) => {
      const newAuthor = new AuthorModel(args);
      await newAuthor.save();
      return newAuthor;
    },
  },
};
