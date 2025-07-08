import type { Request, Response } from "express";
import { PingService } from "../services/service.ping.ts";
import { Controller, Inject } from "../helpers/helper.di.ts";
import { StatusCodes } from "http-status-codes";

@Controller()
export class PingController {
  constructor(@Inject("PingService") private service: PingService) {}

  ping() {
    return async (req: Request, res: Response): Promise<void> => {
      try {
        const response = await this.service.ping();
        res.status(StatusCodes.OK).render("ping", response);
      } catch (e: any) {
        res.status(e.stat_code).render("error", { error: e });
      }
    };
  }
}
