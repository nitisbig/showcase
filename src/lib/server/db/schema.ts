import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  url: varchar({length:255}).notNull(),
  description: varchar({length:255}),
  email: varchar({ length: 255 }).notNull().unique(),
});
