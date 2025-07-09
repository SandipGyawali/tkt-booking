import { Container, Injectable, Module, Router } from "./helpers/helper.di.ts";
import { PingModule } from "./modules/ping.module.ts";
import { GraphQlModule } from "./modules/graphql.module.ts";
import { Database } from "./database/db.ts";

@Module([
  {
    token: "PingModule",
    useFactory: (): Router => {
      return Container.resolve(PingModule).route.main();
    },
  },
  {
    token: "GraphQlModule",
    useFactory: (): Router => {
      return Container.resolve(GraphQlModule).route.configure();
    },
  },
  {
    token: "Database",
    useFactory: () => Container.resolve(Database).getClient(),
  },
])
@Injectable()
export class AppModule {}
