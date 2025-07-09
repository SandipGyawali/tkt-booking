import { Pool } from "pg";
import { Injectable } from "../helpers/helper.di.ts";
import { ENVIRONMENT } from "../lib/env.ts";

@Injectable()
export class Database {
  public pool: Pool;

  constructor() {
    this.pool = new Pool({
      connectionString: ENVIRONMENT.DATABASE_URL,
    });

    this.pool
      .connect()
      .then(() => console.log("Database Connected Successfully"))
      .catch((err) => {
        console.error("Database Connection error", err);
      });
  }

  public getClient() {
    return this.pool;
  }
}
