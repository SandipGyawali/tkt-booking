import { PingController } from "../controllers/ping.controller.ts";
import { Inject, Injectable, Module } from "../helpers/helper.di.ts";
import { PingRoute } from "../routes/ping.route.ts";
import { PingService } from "../services/service.ping.ts";

@Module([
  {
    token: "PingService",
    useClass: PingService,
  },
  {
    token: "PingController",
    useClass: PingController,
  },
  {
    token: "PingRoute",
    useClass: PingRoute,
  },
])
@Injectable()
export class PingModule {
  constructor(@Inject("PingRoute") public route: PingRoute) {}
}
