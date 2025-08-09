import {
  decimal,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const showTable = pgTable("shows", {
  id: serial().primaryKey(),
  movie: text("movie").notNull(),
  showDateTime: timestamp("show_date_time").notNull(),
  showPrice: decimal("show_price"),
  occupiedSeats: integer("occupied_seats").notNull().default(0),
});
