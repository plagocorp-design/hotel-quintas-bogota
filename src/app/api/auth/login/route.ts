import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signToken, COOKIE_NAME } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password) return NextResponse.json({ error: "Faltan credenciales" }, { status: 400 });
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
  const token = await signToken({ id: user.id, email: user.email, role: user.role, name: user.name });
  const res = NextResponse.json({ ok: true, user: { id: user.id, email: user.email, role: user.role, name: user.name } });
  res.cookies.set(COOKIE_NAME, token, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60*60*24*365 });
  return res;
}
