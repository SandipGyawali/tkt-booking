import type { Request, Response } from "express";
import { PingService } from "../services/service.ping.ts";
import { Controller, Inject } from "~/helpers/helper.di.ts";

@Controller()
export class PingController {
  constructor(@Inject("PingService") private service: PingService) {}

  ping() {
    return async (req: Request, res: Response): Promise<void> => {
      try {
        const response = await this.service.ping();
        res.status(200).json(response);
      } catch (e) {
        // res.status(e.status).render("error", { error: e });
      }
    };
  }
}
