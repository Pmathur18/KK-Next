import { mutateAdminData, type CareerRecord } from "@/lib/supabase-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json() as Omit<CareerRecord, "id" | "createdAt" | "status">;
  const record: CareerRecord = {
    ...body,
    id: `career-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: "new",
  };
  return Response.json({ career: record, ...(await mutateAdminData("careers", "create", record)) }, { status: 201 });
}
