import { Inject, Injectable, Module } from "../helpers/helper.di.ts";
import { GraphQlRoute } from "../routes/graphql.route.ts";

@Module([
  {
    token: "GraphQlRoute",
    useClass: GraphQlRoute,
  },
])
@Injectable()
export class GraphQlModule {
  constructor(@Inject("GraphQlRoute") public route: GraphQlRoute) {}
}
