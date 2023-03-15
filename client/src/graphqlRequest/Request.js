import { gql } from "@apollo/client";
export const ADD_AUTHOR = gql`
  mutation Mutation($age: String, $name: String) {
    addAuthor(age: $age, name: $name) {
      id
      name
      age
    }
  }
`;

export const GET_AUTHOR = gql`
  query Query {
    authors {
      id
      name
    }
  }
`;

export const GET_BOOKS = gql`
  query Query {
    books {
      id
      name
    }
  }
`;

export const ADD_BOOK = gql`
  mutation Mutation($name: String, $category: String, $authorId: String) {
    addBook(name: $name, category: $category, authorId: $authorId) {
      category
      name
    }
  }
`;

export const GET_BOOK_DETAIL = gql`
  query Query($bookId: String) {
    book(bookId: $bookId) {
      name
      category
      author {
        age
        name
        book {
          name
        }
      }
    }
  }
`;
