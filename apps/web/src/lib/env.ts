import * as z from "zod";

const envSchema = z.object({
  VITE_API_URI: z.string().url(),
  VITE_CLERK_PUBLISHABLE_KEY: z.string(),
});

export const ENVIRONMENT = envSchema.parse(import.meta.env);
