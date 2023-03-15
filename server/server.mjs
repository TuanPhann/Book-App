import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs } from "./schema/index.js";
import { resolvers } from "./resolvers/index.js";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 4000;

const URL = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASS_WORD}@cluster0.vfwxws3.mongodb.net/?retryWrites=true&w=majority`;

// create apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

//conect DB

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("connected to DB");
    await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log(`Connect to http://localhost:${PORT}/graphql`);
  });
