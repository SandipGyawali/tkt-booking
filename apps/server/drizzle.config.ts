import { defineConfig } from "drizzle-kit";
import { ENVIRONMENT } from "./src/lib/env.ts";

// drizzle config setup
export default defineConfig({
  schema: "./src/models/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: ENVIRONMENT["DATABASE_URL"],
  },
  verbose: ENVIRONMENT.NODE_ENV === "development",
  strict: true,
});
