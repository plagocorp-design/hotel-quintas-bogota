import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding...");

  // Hotel settings
  await prisma.hotelSettings.upsert({
    where: { id: "hotel_1" },
    update: {},
    create: {
      id: "hotel_1",
      name: "Hotel Quintas de Bogotá",
      address: "Cl. 22 Bis #44A-19, Teusaquillo, Bogotá",
      phone: "+57 317 6760460",
      email: "hotelquintasdebogota@gmail.com",
      checkInTime: "14:00",
      checkOutTime: "12:30",
      cancellationPolicy: "Cancelación gratuita 24h antes. Después se cobra 1 noche.",
    },
  });

  // Users
  const hash = await bcrypt.hash("admin123", 10);
  for (const u of [
    { email: "admin@hotelquintas.com", name: "Super Admin", role: "ADMIN" },
    { email: "javier@hotelquintas.com", name: "Recepción", role: "RECEPCION" },
    { email: "limpieza@hotelquintas.com", name: "Limpieza", role: "LIMPIEZA" },
  ]) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: { password: hash },
      create: { ...u, password: hash },
    });
  }

  // RoomTypes - FOTOS REALES Booking (public/booking-photos)
  const types = [
    { slug: "sencilla", name: "Habitación Sencilla", capacity: 1, basePrice: 80000, description: "Ideal para viajeros solos, tranquila y cómoda, con baño privado y TV.", amenities: JSON.stringify(["WiFi gratis","TV pantalla plana","Baño privado","Ducha","Suelo parquet"]), images: JSON.stringify(["/booking-photos/01-609103266.jpg","/booking-photos/18-609103876.jpg","/booking-photos/23-609101796.jpg"]) },
    { slug: "doble", name: "Habitación Doble", capacity: 2, basePrice: 110000, description: "Perfecta para parejas, amplia y luminosa.", amenities: JSON.stringify(["WiFi gratis","Baño privado","Suelo parquet","TV cable","Servicio habitación"]), images: JSON.stringify(["/booking-photos/04-609124083.jpg","/booking-photos/19-609103826.jpg","/booking-photos/22-609101832.jpg"]) },
    { slug: "triple", name: "Habitación Triple", capacity: 3, basePrice: 130000, description: "Equilibrio ideal para familia pequeña o amigos.", amenities: JSON.stringify(["WiFi gratis","Baño privado","TV","Limpieza diaria"]), images: JSON.stringify(["/booking-photos/07-609104203.jpg","/booking-photos/17-609104057.jpg","/booking-photos/20-609102019.jpg"]) },
    { slug: "familiar", name: "Habitación Familiar", capacity: 4, basePrice: 180000, description: "Amplia para 4 huéspedes, muy solicitada.", amenities: JSON.stringify(["WiFi gratis","2 camas dobles grandes","Baño privado","TV"]), images: JSON.stringify(["/booking-photos/10-636593776.jpg","/booking-photos/12-636355115.jpg","/booking-photos/14-609104557.jpg","/booking-photos/24-609101700.jpg"]) },
    { slug: "familiar-bañera", name: "Habitación Familiar con bañera", capacity: 5, basePrice: 200000, description: "La más completa, con bañera, bidet y zona de estar.", amenities: JSON.stringify(["Bañera","Bidet","Interconectada","Zona estar","WiFi gratis"]), images: JSON.stringify(["/booking-photos/08-609124190.jpg","/booking-photos/11-636355221.jpg","/booking-photos/15-609104396.jpg","/booking-photos/21-609101906.jpg"]) },
  ];
  for (const t of types) {
    await prisma.roomType.upsert({ where: { slug: t.slug }, update: { images: t.images, description: t.description }, create: t });
  }

  // Rooms
  const roomDefs = [
    { number: "101", floor: 1, slug: "triple", status: "DISPONIBLE" },
    { number: "102", floor: 1, slug: "doble", status: "DISPONIBLE" },
    { number: "103", floor: 1, slug: "sencilla", status: "DISPONIBLE" },
    { number: "104", floor: 1, slug: "sencilla", status: "MANTENIMIENTO" },
    { number: "201", floor: 2, slug: "doble", status: "DISPONIBLE" },
    { number: "202", floor: 2, slug: "triple", status: "DISPONIBLE" },
    { number: "203", floor: 2, slug: "doble", status: "DISPONIBLE" },
    { number: "301", floor: 3, slug: "familiar", status: "DISPONIBLE" },
    { number: "302", floor: 3, slug: "familiar", status: "DISPONIBLE" },
    { number: "303", floor: 3, slug: "familiar-bañera", status: "DISPONIBLE" },
    { number: "304", floor: 3, slug: "familiar-bañera", status: "DISPONIBLE" },
  ];
  for (const r of roomDefs) {
    const type = await prisma.roomType.findUnique({ where: { slug: r.slug } });
    await prisma.room.upsert({
      where: { number: r.number },
      update: { status: r.status, typeId: type.id },
      create: { number: r.number, floor: r.floor, typeId: type.id, status: r.status },
    });
  }

  // Templates WhatsApp
  for (const tpl of [
    { name: "reserva_confirmada", category: "UTILITY", body: "Hola {{1}}, tu reserva {{2}} del {{3}} al {{4}} en Hotel Quintas de Bogotá está CONFIRMADA. Te esperamos en Cl. 22 Bis #44A-19." },
    { name: "recordatorio_checkin", category: "UTILITY", body: "Hola {{1}}, recordatorio: tu check-in es mañana {{2}} a las 14:00. ¡Te esperamos!" },
    { name: "agradecimiento_checkout", category: "UTILITY", body: "Gracias {{1}} por tu visita. ¡Te esperamos pronto! Calificanos en Booking." },
  ]) {
    await prisma.whatsAppTemplate.upsert({ where: { name: tpl.name }, update: {}, create: tpl });
  }

  // Rate seasons
  await prisma.rateSeason.upsert({
    where: { id: "alta_dic" },
    update: {},
    create: { id: "alta_dic", name: "Temporada Alta Diciembre", start: new Date("2026-12-15"), end: new Date("2027-01-15"), multiplier: 1.3 },
  });

  // Demo guest + reservation to test flows
  const guest = await prisma.guest.upsert({
    where: { id: "guest_demo" },
    update: {},
    create: { id: "guest_demo", name: "Demo Huésped", phone: "+57 300 0000000", email: "demo@example.com" },
  });

  console.log("Seed done. Users: admin@hotelquintas.com / javier@hotelquintas.com / limpieza@hotelquintas.com pass: admin123");
}

main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
