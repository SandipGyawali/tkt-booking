import { Inject, Injectable, Module } from "../helpers/helper.di.ts";
import { InngestRoute } from "../routes/inngest.route.ts";
import { InngestService } from "../services/inngest.service.ts";

@Module([
  {
    token: "InngestRoute",
    useClass: InngestRoute,
  },
  {
    token: "InngestService",
    useClass: InngestService,
  },
])
@Injectable()
export class InngestModule {
  constructor(@Inject("InngestRoute") public route: InngestRoute) {}
}
