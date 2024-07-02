import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const developers = pgTable("developers", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  password: text("password"),
});
