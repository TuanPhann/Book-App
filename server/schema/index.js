export const typeDefs = `#graphql
    type Book {
        id: String,
        name: String,
        category: String,
        author: Author     
    }

    type Author {
        id: String,
        name: String,
        age: String
        book:[Book]
    }

    type Query {
        books:[Book]
        authors:[Author]
        book (bookId: String): Book
        author (authorId: String): Author
    }

    type Mutation {
        addBook (name:String, category:String, authorId:String):Book
        addAuthor (name:String, age:String): Author
    }
`;
