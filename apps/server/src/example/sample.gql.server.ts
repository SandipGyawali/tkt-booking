// import express, { type Application } from "express";
// import { graphqlHTTP } from "express-graphql";
// import {
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLList,
//   GraphQLInt,
//   GraphQLNonNull,
// } from "graphql";

// const app: Application = express();
// const port = 3000;

// const authors = [
//   { id: 1, name: "J.K. Rowling" },
//   { id: 2, name: "J.R.R. Tolkien" },
//   { id: 3, name: "George R.R. Martin" },
//   { id: 4, name: "Agatha Christie" },
//   { id: 5, name: "Stephen King" },
//   { id: 6, name: "Harper Lee" },
//   { id: 7, name: "Jane Austen" },
//   { id: 8, name: "Dan Brown" },
//   { id: 9, name: "Mark Twain" },
//   { id: 10, name: "Leo Tolstoy" },
// ];

// const books = [
//   { id: 1, title: "Harry Potter and the Philosopher's Stone", authorId: 1 },
//   { id: 2, title: "Harry Potter and the Chamber of Secrets", authorId: 1 },
//   { id: 3, title: "The Hobbit", authorId: 2 },
//   { id: 4, title: "The Lord of the Rings", authorId: 2 },
//   { id: 5, title: "A Game of Thrones", authorId: 3 },
//   { id: 6, title: "A Clash of Kings", authorId: 3 },
//   { id: 7, title: "Murder on the Orient Express", authorId: 4 },
//   { id: 8, title: "And Then There Were None", authorId: 4 },
//   { id: 9, title: "The Shining", authorId: 5 },
//   { id: 10, title: "It", authorId: 5 },
//   { id: 11, title: "To Kill a Mockingbird", authorId: 6 },
//   { id: 12, title: "Pride and Prejudice", authorId: 7 },
//   { id: 13, title: "The Da Vinci Code", authorId: 8 },
//   { id: 14, title: "Angels & Demons", authorId: 8 },
//   { id: 15, title: "The Adventures of Tom Sawyer", authorId: 9 },
//   { id: 16, title: "Adventures of Huckleberry Finn", authorId: 9 },
//   { id: 17, title: "War and Peace", authorId: 10 },
//   { id: 18, title: "Anna Karenina", authorId: 10 },
// ];

// const AuthorType: any = new GraphQLObjectType({
//   name: "Author",
//   description: "This represents the author type",
//   fields: () => ({
//     id: {
//       type: new GraphQLNonNull(GraphQLInt),
//     },
//     name: {
//       type: new GraphQLNonNull(GraphQLString),
//     },
//     books: {
//       type: new GraphQLList(BookType),
//       resolve: (parent) => {
//         return books.filter((book) => book.authorId == parent.id);
//       },
//     },
//   }),
// });

// const BookType: any = new GraphQLObjectType({
//   name: "Book",
//   description: "This represents the book type",
//   fields: () => ({
//     id: {
//       type: new GraphQLNonNull(GraphQLInt),
//     },
//     title: {
//       type: new GraphQLNonNull(GraphQLString),
//     },
//     authorId: {
//       type: new GraphQLNonNull(GraphQLInt),
//     },
//     author: {
//       type: AuthorType,
//       description: "List of authors",
//       resolve: (parent) => {
//         const filteredData = authors.find(
//           (author) => author.id === parent.authorId
//         );

//         return filteredData;
//       },
//     },
//   }),
// });

// const RootQueryType = new GraphQLObjectType({
//   name: "Query",
//   description: "Root Query",
//   fields: () => ({
//     book: {
//       type: BookType,
//       description: "A Single Book",
//       args: {
//         id: {
//           type: GraphQLInt,
//         },
//       },
//       resolve: (parent, args) => {
//         console.log(parent);
//         console.log(args);

//         return books.find((book) => book.id == args.id) ?? {};
//       },
//     },
//     books: {
//       type: new GraphQLList(BookType),
//       description: "List of Books",
//       resolve: () => books,
//     },
//     author: {
//       type: AuthorType,
//       description: "A Single Author",
//       args: {
//         id: {
//           type: GraphQLInt,
//         },
//       },
//       resolve: (parent, args) =>
//         authors.find((author) => author.id === args.id),
//     },
//     authors: {
//       type: new GraphQLList(AuthorType),
//       description: "List of Authors",
//       resolve: () => authors,
//     },
//   }),
// });

// const RootMutationType = new GraphQLObjectType({
//   name: "Mutation",
//   description: "Root Mutation Object",
//   fields: () => ({
//     addBook: {
//       type: new GraphQLObjectType({
//         name: "BookResponseType",
//         fields: () => ({
//           message: {
//             type: GraphQLString,
//           },
//         }),
//       }),
//       description: "Add a new Book",
//       args: {
//         title: { type: new GraphQLNonNull(GraphQLString) },
//         authorId: { type: new GraphQLNonNull(GraphQLInt) },
//       },
//       resolve: (parent, args) => {
//         const book = {
//           id: books.length + 1,
//           title: args.title,
//           authorId: args.authorId,
//         };

//         books.push(book);

//         return {
//           message: `Book with name ${args.title} added successfully`,
//         };
//       },
//     },
//     addAuthor: {
//       type: new GraphQLObjectType({
//         name: "AuthorResponseType",
//         fields: () => ({
//           message: {
//             type: GraphQLString,
//           },
//         }),
//       }),
//       description: "Add a new Author",
//       args: {
//         name: { type: new GraphQLNonNull(GraphQLString) },
//       },
//       resolve: (parent, args) => {
//         const author = {
//           id: authors.length + 1,
//           name: args.name,
//         };
//         authors.push(author);
//         return {
//           message: `Author with name ${args.name} added successfully`,
//         };
//       },
//     },
//   }),
// });

// const schema = new GraphQLSchema({
//   query: RootQueryType,
//   mutation: RootMutationType,
// });

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     graphiql: true,
//   })
// );

// app.listen(port, () => {
//   console.log(`Listening to the server ${port}`);
// });
