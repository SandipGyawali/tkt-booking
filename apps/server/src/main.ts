import "reflect-metadata";
import "dotenv/config";
import express, { Router, type Application } from "express";
import { ENVIRONMENT } from "./lib/env.ts";
import { Container, Injectable } from "./helpers/helper.di.ts";
import { AppModule } from "./app.module.ts";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

@Injectable()
class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.main();
  }

  private main(): void {
    this.middlewares();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.disable("x-powered-by");
    Container.resolve<AppModule>(AppModule);
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
    // shows the real origin IP
    this.app.enable("trust proxy");
    this.app.use(hpp({ checkBody: true, checkQuery: true }));
    this.app.use(helmet({ contentSecurityPolicy: false }));
    this.app.use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization", "Accept"],
        credentials: true,
      })
    );

    if (ENVIRONMENT["NODE_ENV"] === "development") {
      this.app.use(morgan("dev"));
    }
  }

  private routes(): void {
    this.app.use("/ping", Container.resolve<Router>("PingModule"));
    this.app.use("/graphql", Container.resolve<Router>("GraphQlModule"));
    this.app.use("/api/inngest", Container.resolve<Router>("InngestModule"));
  }

  public listen() {
    this.app.listen(ENVIRONMENT.PORT, (err) => {
      if (err) {
        process.exit(1);
      }
      console.log(`Listening to the server ${ENVIRONMENT.PORT}`);
    });
  }
}

(function () {
  Container.resolve<App>(App).listen();
})();
