import * as z from "zod";

const envSchema = z.object({
  CLERK_PUBLISHABLE_KEY: z.string(),
  CLERK_SECRET_KEY: z.string(),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number(),
  NODE_ENV: z.string(),
  INNGEST_EVENT_KEY: z.string(),
  INNGEST_SIGNING_KEY: z.string(),
});

export const ENVIRONMENT = envSchema.parse(process.env);
