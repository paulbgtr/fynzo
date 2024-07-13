import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schemas.ts",
  out: "./src/db/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "fynzo",
  },
});
