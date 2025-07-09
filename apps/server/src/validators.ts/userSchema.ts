import { z } from "zod";

export const syncUserSchema = z.object({
  name: z.string().trim(),
  email: z.string().trim().email(),
  image: z.string().trim(),
  createdAt: z.date(),
});

export type ZSyncUserDTO = z.infer<typeof syncUserSchema>;
