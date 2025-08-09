import type { Request, Response } from "express";
import { catchAsync } from "../middlewares/catch-async.ts";
import { Controller } from "../helpers/helper.di.ts";

@Controller()
export class ShowController {
  constructor() {}

  public currentPlayingMovies = catchAsync(
    async (req: Request, res: Response) => {}
  );
}
