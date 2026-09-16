import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password) return NextResponse.json({ error: "email and password required" }, { status: 400 });
  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.upsert({
    where: { email },
    update: { password: hash },
    create: { id: "admin-001", name: "Administrador", email, password: hash, role: "ADMIN" },
  });
  return NextResponse.json({ ok: true, email: user.email, role: user.role, hash });
}
