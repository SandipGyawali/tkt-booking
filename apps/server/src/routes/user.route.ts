import { Route, Router } from "../helpers/helper.di.ts";
// import { serve } from "inngest/express";
// import { inngest, functions } from "../inngest/index.ts";

@Route()
export class UserRoute {
  private router: Router;

  constructor() {
    this.router = Router({
      strict: true,
      caseSensitive: true,
    });
  }

  configure(): Router {
    // this.router.use(() => {});
    return this.router;
  }
}
