import {
  pgTable,
  serial,
  text,
  json,
  decimal,
  timestamp,
} from "drizzle-orm/pg-core";

export const movieTable = pgTable("movies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(), // changed from "name" to "title" for clarity
  overview: text("overview"),
  poster: text("poster"),
  backdrop: text("backdrop"),
  releaseDate: text("release_date"),
  language: text("language"),
  tagline: json("tagline").array(),
  genres: json("genres").array(),
  casts: json("casts").array(),
  avgVote: decimal("avg_vote"),
  runtime: decimal("runtime"),
  createdAt: timestamp("created_at").$defaultFn(() => new Date()),
});
