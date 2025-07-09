import { graphqlHTTP } from "express-graphql";
import { Inject, Route, Router } from "../helpers/helper.di.ts";
import graphQlSchema from "~/graphql/index.ts";
import type { Pool } from "pg";

@Route()
export class GraphQlRoute {
  public router: Router;

  constructor(@Inject("Database") private db: Pool) {
    this.router = Router({ strict: true, caseSensitive: true });
  }

  public configure() {
    // Add middlewares (auth, etc) here if needed
    // Example: this.router.use(authMiddleware);
    this.router.all(
      "/",
      graphqlHTTP({
        schema: graphQlSchema,
        graphiql: true,
        context: {
          db: this.db,
        },
      })
    );

    return this.router;
  }
}
