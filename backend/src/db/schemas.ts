import { date, serial, varchar, pgTable } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  description: varchar("description"),
  status: varchar("status").notNull().default("active"), // active, inactive, paused
  startDate: date("start_date").notNull(),
  endDate: date("end_date"),
  priority: varchar("priority"), // low, medium, high
  mood: varchar("mood").notNull().default("neutral"), // neutral, happy, sad
});
