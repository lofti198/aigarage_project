import { Webhook } from "svix";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

type ClerkUserCreatedEvent = {
  type: "user.created";
  data: {
    id: string;
    email_addresses: { email_address: string; id: string }[];
    primary_email_address_id: string;
    first_name: string | null;
    last_name: string | null;
  };
};

export async function POST(req: Request) {
  const secret = process.env.CLERK_WEBHOOK_SECRET;
  if (!secret) {
    return new Response("CLERK_WEBHOOK_SECRET not set", { status: 500 });
  }

  const headerPayload = await headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const payload = await req.text();
  const wh = new Webhook(secret);

  let event: ClerkUserCreatedEvent;
  try {
    event = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as ClerkUserCreatedEvent;
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type !== "user.created") {
    return new Response("Ignored", { status: 200 });
  }

  const { id, email_addresses, primary_email_address_id, first_name, last_name } = event.data;
  const primaryEmail = email_addresses.find((e) => e.id === primary_email_address_id);

  if (!primaryEmail) {
    return new Response("No primary email", { status: 400 });
  }

  const name = [first_name, last_name].filter(Boolean).join(" ") || null;

  await prisma.user.upsert({
    where: { id },
    create: { id, email: primaryEmail.email_address, name },
    update: { email: primaryEmail.email_address, name },
  });

  return new Response("OK", { status: 200 });
}
