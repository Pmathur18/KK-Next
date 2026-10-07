import { createClient } from "@supabase/supabase-js";
import {
  getAdminData as getLocalAdminData,
  mutateAdminData as mutateLocalAdminData,
  type CareerRecord,
  type ContactRecord,
  type JobOpening,
} from "@/lib/admin-store";
import type { BlogPost } from "@/data/blog";
import type { Testimonial } from "@/data/testimonials";
import type { Project } from "@/data/portfolio";

export type { CareerRecord, ContactRecord, JobOpening } from "@/lib/admin-store";

export type AdminResource = "blogs" | "testimonials" | "contacts" | "careers" | "portfolios" | "jobOpenings";
export type AdminRecord = BlogPost | Testimonial | ContactRecord | CareerRecord | Project | JobOpening;

type StoredRow = {
  resource: AdminResource;
  item_id: string;
  payload: AdminRecord;
  is_deleted: boolean;
};

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

function itemId(resource: AdminResource, item: AdminRecord) {
  return resource === "blogs" || resource === "portfolios"
    ? (item as BlogPost | Project).slug
    : (item as { id: string }).id;
}

function applyRows(base: Awaited<ReturnType<typeof getLocalAdminData>>, rows: StoredRow[]) {
  const result = {
    blogs: [...base.blogs],
    testimonials: [...base.testimonials],
    contacts: [...base.contacts],
    careers: [...base.careers],
    portfolios: [...base.portfolios],
    jobOpenings: [...base.jobOpenings],
  } as Record<AdminResource, AdminRecord[]>;

  for (const resource of ["blogs", "testimonials", "contacts", "careers", "portfolios", "jobOpenings"] as AdminResource[]) {
    const resourceRows = rows.filter((row) => row.resource === resource);
    if (!resourceRows.length) continue;
    const ids = new Set(resourceRows.map((row) => row.item_id));
    result[resource] = result[resource].filter((item) => !ids.has(itemId(resource, item as AdminRecord)));
    result[resource].push(...resourceRows.filter((row) => !row.is_deleted).map((row) => row.payload));
  }

  return result as unknown as typeof base;
}

export async function getAdminData() {
  const localData = await getLocalAdminData();
  const supabase = getSupabase();
  if (!supabase) return localData;

  const { data, error } = await supabase
    .from("admin_content")
    .select("resource,item_id,payload,is_deleted");

  // Keep the site renderable before the SQL migration has been applied.
  if (error) return localData;
  return applyRows(localData, (data ?? []) as StoredRow[]);
}

export async function getPublicContent() {
  const data = await getAdminData();
  return {
    blogs: data.blogs,
    portfolios: data.portfolios,
    jobOpenings: data.jobOpenings.filter((item) => item.active),
  };
}

export async function mutateAdminData(resource: AdminResource, action: "create" | "update" | "delete", data: AdminRecord) {
  const supabase = getSupabase();
  if (!supabase) return mutateLocalAdminData(resource, action, data as Parameters<typeof mutateLocalAdminData>[2]);

  const { error } = await supabase.from("admin_content").upsert({
    resource,
    item_id: itemId(resource, data),
    payload: data,
    is_deleted: action === "delete",
  }, { onConflict: "resource,item_id" });

  if (error) {
    throw new Error(`Supabase migration required: ${error.message}`);
  }
  return getAdminData();
}
