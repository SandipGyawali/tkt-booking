import { graphqlHTTP } from "express-graphql";
import { Inject, Route, Router } from "../helpers/helper.di.ts";
import graphQlSchema from "~/graphql/index.ts";
import type { Pool } from "pg";
import { requireAuth } from "@clerk/express";

@Route()
export class GraphQlRoute {
  public router: Router;

  constructor(@Inject("Database") private db: Pool) {
    this.router = Router({ strict: true, caseSensitive: true });
  }

  public configure() {
    // clerk middleware for authentication
    this.router.use(requireAuth());
    // graphql router.
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
