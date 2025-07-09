import { Container, Injectable, Module, Router } from "./helpers/helper.di.ts";
import { PingModule } from "./modules/ping.module.ts";
import { GraphQlModule } from "./modules/graphql.module.ts";
import { Database } from "./database/db.ts";
import { InngestModule } from "./modules/inngest.module.ts";
import { UserModule } from "./modules/user.module.ts";
import { Inngest } from "./lib/inngest.ts";

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
  {
    token: "Inngest",
    useFactory: () => Container.resolve(Inngest),
  },
  {
    token: "InngestModule",
    useFactory: () => Container.resolve(InngestModule).route.configure(),
  },
  {
    token: "UserModule",
    useFactory: () => Container.resolve(UserModule).route.configure(),
  },
])
@Injectable()
export class AppModule {}
