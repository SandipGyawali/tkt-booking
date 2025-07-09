import type { Request, Response } from "express";
import { PingService } from "../services/service.ping.ts";
import { Controller, Inject } from "~/helpers/helper.di.ts";
import { catchAsync } from "../middlewares/catch-async.ts";

@Controller()
export class PingController {
  constructor(@Inject("PingService") private service: PingService) {}

  public ping = catchAsync(async (req: Request, res: Response) => {
    const response = await this.service.ping();
    res.status(200).json(response);
  });
}
