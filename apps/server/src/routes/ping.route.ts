import type { PingController } from "../controllers/ping.controller.ts";
import { Inject, Route, Router } from "../helpers/helper.di.ts";

@Route()
export class PingRoute {
  private router: Router;

  constructor(@Inject("PingController") private controller: PingController) {
    this.router = Router({
      strict: true,
      caseSensitive: true,
    });
  }

  main(): Router {
    this.router.all("*", this.controller.ping());
    return this.router;
  }
}
