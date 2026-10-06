import { NextRequest } from "next/server";
import { getAdminData, mutateAdminData } from "@/lib/admin-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const resource = request.nextUrl.searchParams.get("resource");
  const data = await getAdminData();
  return Response.json(resource && resource in data ? { [resource]: data[resource as keyof typeof data] } : data);
}

export async function POST(request: Request) {
  const body = await request.json() as {
    resource: "blogs" | "testimonials" | "contacts" | "careers";
    action: "create" | "update" | "delete";
    data: Parameters<typeof mutateAdminData>[2];
  };

  if (!body.resource || !body.action || !body.data) {
    return Response.json({ error: "resource, action, and data are required" }, { status: 400 });
  }

  return Response.json(await mutateAdminData(body.resource, body.action, body.data));
}
