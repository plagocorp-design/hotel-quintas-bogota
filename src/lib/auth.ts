import * as jose from "jose";
import { cookies } from "next/headers";
import { prisma } from "./prisma";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "hotel-quintas-jwt-super-secreto-cambiar-en-produccion-2026-32chars");
const COOKIE = "hq_token";

export async function signToken(payload: { id: string; email: string; role: string; name: string }) {
  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("365d")
    .sign(secret);
}

export async function verifyToken(token: string) {
  const { payload } = await jose.jwtVerify(token, secret);
  return payload as { id: string; email: string; role: string; name: string };
}

export async function getSession() {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (!token) return null;
  try {
    const payload = await verifyToken(token);
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user) return null;
    return { id: user.id, email: user.email, role: user.role, name: user.name };
  } catch {
    return null;
  }
}

export async function requireAuth(roles?: string[]) {
  const s = await getSession();
  if (!s) throw new Error("UNAUTHORIZED");
  if (roles && !roles.includes(s.role)) throw new Error("FORBIDDEN");
  return s;
}

export const COOKIE_NAME = COOKIE;
