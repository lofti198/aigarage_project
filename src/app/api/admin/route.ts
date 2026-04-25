import { getCurrentUser } from "@/lib/current-user";

export async function GET() {
  const user = await getCurrentUser();

  if (!user || user.role !== "ADMIN") {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }

  return Response.json({ message: "Welcome, admin." });
}
