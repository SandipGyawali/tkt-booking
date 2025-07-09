import { Inject, Route, Router } from "../helpers/helper.di.ts";
import { serve } from "inngest/express";
import type { UserController } from "../controllers/user.controller.ts";
import type { InngestService } from "../services/inngest.service.ts";

@Route()
export class InngestRoute {
  private router: Router;

  constructor(
    @Inject("InngestService") private inngestService: InngestService,
    @Inject("UserController") private controller: UserController
  ) {
    this.router = Router({
      strict: true,
      caseSensitive: true,
    });
  }

  configure(): Router {
    const inngest = this.inngestService.getInngest();

    this.router.use(
      "/",
      serve({
        client: inngest,
        functions: this.inngestService.getInngestFunctions(),
      })
    );
    return this.router;
  }
}
