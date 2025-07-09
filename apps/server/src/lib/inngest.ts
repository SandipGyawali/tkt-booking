import { Inject, Injectable } from "../helpers/helper.di.ts";
import { Inngest as _Inngest } from "inngest";
import { UserController } from "../controllers/user.controller.ts";

@Injectable()
export class Inngest {
  private inngest;
  // Create an empty array where we'll export future Inngest functions

  constructor(
    @Inject("UserController") private readonly controller: UserController
  ) {
    this.inngest = new _Inngest({ id: "tkt-booking" });
  }

  public getInngest(): _Inngest<{
    id: string;
  }> {
    return this.inngest;
  }
}
