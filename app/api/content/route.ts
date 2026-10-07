import { getPublicContent } from "@/lib/supabase-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(await getPublicContent());
}
