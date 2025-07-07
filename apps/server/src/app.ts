import express, { type Application } from "express";
// import { graphqlHTTP } from "express-graphql";
// import {} from "graphql";

class App {
  private app: Application;
  private port = 3000;

  constructor() {
    this.app = express();
  }

  public listen() {
    this.app.listen(this.port, (err) => {
      if (err) {
        process.exit(1);
        return;
      }
      console.log(`Listening to the server ${this.port}`);
    });
  }
}

const server = new App();
server.listen();
