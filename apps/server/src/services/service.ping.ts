import { StatusCodes as HttpStatusCode } from "http-status-codes";
import { Service } from "../helpers/helper.di.ts";

@Service()
export class PingService {
  constructor() {}

  async ping() {
    const metaData: Record<string, unknown> = {
      message: "Server Connected",
      status: HttpStatusCode.OK,
    };

    return metaData;
  }
}
