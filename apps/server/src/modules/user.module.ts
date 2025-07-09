import { UserController } from "../controllers/user.controller.ts";
import { Inject, Injectable, Module } from "../helpers/helper.di.ts";
import { UserService } from "../services/user.service.ts";
import { UserRoute } from "../routes/user.route.ts";

@Module([
  {
    token: "UserService",
    useClass: UserService,
  },
  {
    token: "UserController",
    useClass: UserController,
  },
  {
    token: "UserRoute",
    useClass: UserRoute,
  },
])
@Injectable()
export class UserModule {
  constructor(@Inject("UserRoute") public route: UserRoute) {}
}
