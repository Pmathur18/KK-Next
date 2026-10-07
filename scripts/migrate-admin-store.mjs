import fs from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";

const env = Object.fromEntries((await fs.readFile(".env.local", "utf8"))
  .split(/\r?\n/)
  .filter((line) => line && !line.startsWith("#"))
  .map((line) => {
    const index = line.indexOf("=");
    return [line.slice(0, index), line.slice(index + 1)];
  }));

const client = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});
const store = JSON.parse(await fs.readFile("data/admin-store.json", "utf8"));
const rows = [];

for (const resource of ["blogs", "testimonials", "contacts", "careers", "portfolios", "jobOpenings"]) {
  for (const item of store[resource] ?? []) {
    rows.push({
      resource,
      item_id: resource === "blogs" || resource === "portfolios" ? item.slug : item.id,
      payload: item,
      is_deleted: false,
    });
  }
}

for (const slug of store.deletedBlogSlugs ?? []) rows.push({ resource: "blogs", item_id: slug, payload: { slug }, is_deleted: true });
for (const slug of store.deletedPortfolioSlugs ?? []) rows.push({ resource: "portfolios", item_id: slug, payload: { slug }, is_deleted: true });

if (!rows.length) {
  console.log("No local records found to migrate.");
  process.exit(0);
}

const { error } = await client.from("admin_content").upsert(rows, { onConflict: "resource,item_id" });
if (error) throw error;
console.log(`Migrated ${rows.length} records to Supabase.`);
