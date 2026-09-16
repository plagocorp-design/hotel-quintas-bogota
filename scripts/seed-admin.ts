import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const hash = await bcrypt.hash("admin123", 10);
  const user = await prisma.user.upsert({
    where: { email: "admin@hotelquintasdebogota.com" },
    update: { password: hash },
    create: { id: "admin-001", name: "Administrador", email: "admin@hotelquintasdebogota.com", password: hash, role: "ADMIN" },
  });
  console.log("Admin user:", user.email, "role:", user.role);
  console.log("Hash:", hash);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
