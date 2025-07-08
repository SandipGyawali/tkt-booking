import { Container, Injectable, Module, Router } from "./helpers/helper.di.ts";
import { PingModule } from "./modules/ping.module.ts";

@Module([
  {
    token: "PingModule",
    useFactory: (): Router => {
      return Container.resolve(PingModule).route.main();
    },
  },
])
@Injectable()
export class AppModule {}
