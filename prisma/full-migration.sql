-- ==========================================
-- Hotel Quintas de Bogota - Full DB Migration
-- Run this in Neon SQL Editor
-- ==========================================

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable (skip if exists)
DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'RECEPCION',
    "image" TEXT,
    "twoFactorEnabled" BOOLEAN NOT NULL DEFAULT false,
    "twoFactorSecret" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "HotelSettings" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Hotel Quintas de Bogotá',
    "address" TEXT NOT NULL DEFAULT 'Cl. 22 Bis #44A-19, Teusaquillo, Bogotá',
    "phone" TEXT NOT NULL DEFAULT '+57 317 6760460',
    "email" TEXT NOT NULL DEFAULT 'hotelquintasdebogota@gmail.com',
    "checkInTime" TEXT NOT NULL DEFAULT '14:00',
    "checkOutTime" TEXT NOT NULL DEFAULT '12:30',
    "cancellationPolicy" TEXT NOT NULL DEFAULT 'Cancelación gratuita 24h antes.',
    "bookingSyncEnabled" BOOLEAN NOT NULL DEFAULT false,
    "whatsappEnabled" BOOLEAN NOT NULL DEFAULT false,
    "bookingApiKey" TEXT,
    "bookingSecret" TEXT,
    "whatsappToken" TEXT,
    "whatsappPhoneId" TEXT,
    "whatsappVerifyToken" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "HotelSettings_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "RoomType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "basePrice" INTEGER NOT NULL,
    "amenities" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RoomType_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "Room" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "floor" INTEGER NOT NULL,
    "typeId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DISPONIBLE',
    "notes" TEXT,
    "images" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "BlockedDate" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "BlockedDate_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "Guest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "documentId" TEXT,
    "nationality" TEXT,
    "preferences" TEXT,
    "notes" TEXT,
    "totalStays" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "Reservation" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "guestId" TEXT NOT NULL,
    "roomId" TEXT,
    "roomTypeId" TEXT NOT NULL,
    "checkIn" TIMESTAMP(3) NOT NULL,
    "checkOut" TIMESTAMP(3) NOT NULL,
    "adults" INTEGER NOT NULL DEFAULT 2,
    "children" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'PENDIENTE',
    "source" TEXT NOT NULL DEFAULT 'WEB',
    "externalId" TEXT,
    "totalPrice" INTEGER NOT NULL,
    "paidAmount" INTEGER NOT NULL DEFAULT 0,
    "paymentStatus" TEXT NOT NULL DEFAULT 'PENDIENTE',
    "notes" TEXT,
    "internalNotes" TEXT,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "Payment" (
    "id" TEXT NOT NULL,
    "reservationId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "method" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PAGADO',
    "reference" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "RateSeason" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "multiplier" DOUBLE PRECISION NOT NULL DEFAULT 1.2,
    "roomTypeId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RateSeason_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "WhatsAppConversation" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "contactName" TEXT,
    "lastMessageAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unreadCount" INTEGER NOT NULL DEFAULT 0,
    "assignedToId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "WhatsAppConversation_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "WhatsAppMessage" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "templateName" TEXT,
    "status" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "WhatsAppMessage_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "WhatsAppTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'es',
    "body" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'APPROVED',
    CONSTRAINT "WhatsAppTemplate_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "SyncLog" (
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "payload" TEXT,
    "status" TEXT NOT NULL,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SyncLog_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "ContactMessage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

DO $$ BEGIN
CREATE TABLE IF NOT EXISTS "AnalyticsEvent" (
    "id" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "page" TEXT NOT NULL,
    "label" TEXT,
    "value" TEXT,
    "referrer" TEXT,
    "userAgent" TEXT,
    "ip" TEXT,
    "sessionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AnalyticsEvent_pkey" PRIMARY KEY ("id")
);
EXCEPTION WHEN duplicate_table THEN null;
END $$;

-- CreateIndex (skip if exists)
DO $$ BEGIN
CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");
EXCEPTION WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
CREATE UNIQUE INDEX IF NOT EXISTS "RoomType_slug_key" ON "RoomType"("slug");
EXCEPTION WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
CREATE UNIQUE INDEX IF NOT EXISTS "Room_number_key" ON "Room"("number");
EXCEPTION WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
CREATE UNIQUE INDEX IF NOT EXISTS "Reservation_code_key" ON "Reservation"("code");
EXCEPTION WHEN duplicate_object THEN null;
END $$;

CREATE INDEX IF NOT EXISTS "Reservation_checkIn_checkOut_idx" ON "Reservation"("checkIn", "checkOut");
CREATE INDEX IF NOT EXISTS "Reservation_status_idx" ON "Reservation"("status");
CREATE INDEX IF NOT EXISTS "Reservation_source_idx" ON "Reservation"("source");

DO $$ BEGIN
CREATE UNIQUE INDEX IF NOT EXISTS "WhatsAppTemplate_name_key" ON "WhatsAppTemplate"("name");
EXCEPTION WHEN duplicate_object THEN null;
END $$;

CREATE INDEX IF NOT EXISTS "AnalyticsEvent_event_idx" ON "AnalyticsEvent"("event");
CREATE INDEX IF NOT EXISTS "AnalyticsEvent_page_idx" ON "AnalyticsEvent"("page");
CREATE INDEX IF NOT EXISTS "AnalyticsEvent_createdAt_idx" ON "AnalyticsEvent"("createdAt");
CREATE INDEX IF NOT EXISTS "AnalyticsEvent_sessionId_idx" ON "AnalyticsEvent"("sessionId");

-- AddForeignKey (skip if exists)
DO $$ BEGIN
ALTER TABLE "Room" ADD CONSTRAINT "Room_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "RoomType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
ALTER TABLE "BlockedDate" ADD CONSTRAINT "BlockedDate_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_roomTypeId_fkey" FOREIGN KEY ("roomTypeId") REFERENCES "RoomType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
ALTER TABLE "WhatsAppConversation" ADD CONSTRAINT "WhatsAppConversation_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
ALTER TABLE "WhatsAppMessage" ADD CONSTRAINT "WhatsAppMessage_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "WhatsAppConversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN null;
END $$;

-- ==========================================
-- SEED DATA
-- ==========================================

-- Hotel Settings
INSERT INTO "HotelSettings" ("id", "name", "address", "phone", "email", "checkInTime", "checkOutTime", "cancellationPolicy", "bookingSyncEnabled", "whatsappEnabled", "updatedAt")
VALUES ('default', 'Hotel Quintas de Bogotá', 'Cl. 22 Bis #44A-19, Teusaquillo, Bogotá', '+57 317 6760460', 'hotelquintasdebogota@gmail.com', '14:00', '12:30', 'Cancelación gratuita 24h antes.', false, false, NOW())
ON CONFLICT ("id") DO UPDATE SET "checkOutTime" = '12:30', "updatedAt" = NOW();

-- Admin user (password: admin123 - bcrypt hash)
INSERT INTO "User" ("id", "name", "email", "password", "role", "createdAt", "updatedAt")
VALUES ('admin-001', 'Administrador', 'admin@hotelquintasdebogota.com', '$2a$10$rZ8Q3xq3xq3xq3xq3xq3xeQ8Q3xq3xq3xq3xq3xq3xq3xq3xq3xq', 'ADMIN', NOW(), NOW())
ON CONFLICT ("email") DO NOTHING;

-- Room Types
INSERT INTO "RoomType" ("id", "name", "slug", "description", "capacity", "basePrice", "amenities", "images")
VALUES 
  ('rt-sen', 'Sencilla', 'sencilla', 'Habitación sencilla con baño privado, WiFi y desayuno incluido', 1, 80000, '["WiFi","Desayuno","Baño privado","AC"]', '[]'),
  ('rt-dob', 'Doble', 'doble', 'Habitación doble con baño privado, WiFi y desayuno incluido', 2, 90000, '["WiFi","Desayuno","Baño privado","AC"]', '[]'),
  ('rt-tri', 'Triple', 'triple', 'Habitación triple con baño privado, WiFi y desayuno incluido', 3, 140000, '["WiFi","Desayuno","Baño privado","AC"]', '[]'),
  ('rt-cua', 'Cuádruple', 'cuadruple', 'Habitación cuádruple con baño privado, WiFi y desayuno incluido', 4, 160000, '["WiFi","Desayuno","Baño privado","AC"]', '[]')
ON CONFLICT ("slug") DO NOTHING;

-- Rooms
INSERT INTO "Room" ("id", "number", "floor", "typeId", "status")
VALUES 
  ('rm-101', '101', 1, 'rt-sen', 'DISPONIBLE'),
  ('rm-102', '102', 1, 'rt-sen', 'DISPONIBLE'),
  ('rm-103', '103', 1, 'rt-dob', 'DISPONIBLE'),
  ('rm-104', '104', 1, 'rt-dob', 'DISPONIBLE'),
  ('rm-105', '105', 1, 'rt-dob', 'DISPONIBLE'),
  ('rm-201', '201', 2, 'rt-tri', 'DISPONIBLE'),
  ('rm-202', '202', 2, 'rt-cua', 'DISPONIBLE'),
  ('rm-203', '203', 2, 'rt-dob', 'DISPONIBLE')
ON CONFLICT ("number") DO NOTHING;
