import { mutateAdminData, type ContactRecord } from "@/lib/supabase-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json() as Omit<ContactRecord, "id" | "createdAt" | "status">;
  const record: ContactRecord = {
    ...body,
    id: `contact-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: "new",
  };
  return Response.json({ contact: record, ...(await mutateAdminData("contacts", "create", record)) }, { status: 201 });
}
