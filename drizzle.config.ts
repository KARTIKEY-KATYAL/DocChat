import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: "./drizzle",
  schema: "./src/lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://DocChats_owner:npg_mwl3DEj6GRZa@ep-bitter-art-abm8to0y-pooler.eu-west-2.aws.neon.tech/DocChats?sslmode=require",
  },
});
