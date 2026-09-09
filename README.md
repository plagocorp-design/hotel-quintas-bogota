# Hotel Quintas de Bogotá — Plataforma 100% Funcional

**Dirección:** Cl. 22 Bis #44A-19, Teusaquillo, Bogotá · **Tel:** +57 317 6760460
**Estado:** ✅ Build OK · DB real (SQLite dev → PostgreSQL prod) · Auth real · Reservas transaccionales

## Inicio rápido
```bash
npm install
npx prisma generate
npx prisma db push
node prisma/seed.mjs   # o cmd /c "node prisma/seed.mjs"
npm run dev            # http://localhost:3000
```

**Usuarios demo (pass: admin123)**
- admin@hotelquintas.com (ADMIN)
- javier@hotelquintas.com (RECEPCION)
- limpieza@hotelquintas.com (LIMPIEZA)

## Arquitectura
Ver `ARQUITECTURA.md` y `prisma/schema.prisma`. Flujo: Next.js 15 App Router → Prisma → SQLite (dev) / PostgreSQL (prod). Auth JWT httpOnly `hq_token` + middleware RBAC. Disponibilidad con transacción `$transaction` para evitar overbooking.

## Flujos punta a punta (reales)
1. **Web → DB:** `POST /api/bookings` (motor `/reservas`) verifica `findAvailableRoom` transaccional, crea Guest, asigna Room, genera `HQB-...`, log SyncLog. Calendario y dashboard se actualizan inmediatamente.
2. **Booking → PMS:** `POST /api/booking-sync/webhook` (HMAC opcional) crea/actualiza/cancela reserva `source=BOOKING`, ocupa libera habitación, guarda SyncLog. `GET /api/booking-sync/webhook` muestra última sincronización.
3. **WhatsApp → Reserva:** Mensaje entrante `POST /api/whatsapp/webhook` guarda Conversation/Message real. Panel `/admin/whatsapp` lista conversaciones reales, responder guarda OUTBOUND y si hay `WHATSAPP_TOKEN` envía a Graph API. Botón "Crear reserva desde chat" prellena `/admin/reservas`.
4. **Check-in/out:** `PATCH /api/reservations/:id {action:"checkin"}` → Reservation CHECKIN + Room OCUPADA (transacción). `checkout` → CHECKOUT + Room LIMPIEZA. Cancel → CANCELADA + Room DISPONIBLE.
5. **Bloqueo manual:** `POST /api/blocked-dates` en calendario afecta `GET /api/availability` al instante.

## Endpoints reales
- `GET /api/room-types`, `GET/POST/PATCH /api/rooms`, `GET /api/availability?checkIn&checkOut&adults`, `GET/POST /api/bookings`, `PATCH /api/reservations/:id`, `GET /api/dashboard`, `GET /api/guests?q=`, `POST /api/contact`, `GET/POST /api/whatsapp/*`, `GET /api/hotel-settings`, `PUT /api/tarifas`.

## Páginas públicas (dinámicas DB)
- `/` (fetch RoomType), `/habitaciones` (filtra por capacidad DB), `/reservas` (motor real con pricing temporada), `/contacto` (guarda ContactMessage), `/galeria`, `/ubicacion`, `/servicios`.

## Panel PMS (`/admin` protegido por `middleware.ts:1`)
- Login `/admin/login`, Dashboard, Habitaciones CRUD, Calendario Channel Manager, Reservas con checkin/out, WhatsApp bandeja real, Huéspedes CRM, Tarifas temporadas, Reportes export CSV, Configuración HotelSettings.

## Integraciones — cómo conectar credenciales reales
1. **PostgreSQL prod:** cambiar `.env` `DATABASE_URL="postgresql://user:pass@host:5432/hotelquintas"` → `npx prisma db push`.
2. **WhatsApp Meta:** crear app en developers.facebook.com → copiar `WHATSAPP_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_VERIFY_TOKEN` a `.env` y a `/admin/configuracion`. Verificar webhook: Meta llamará `GET /api/whatsapp/webhook?hub.verify_token=...`. Mensajes entrantes llegarán a `POST /api/whatsapp/webhook` y aparecerán en bandeja.
3. **Booking.com:** solicitar acceso Connectivity API, poner `BOOKING_API_KEY` y `BOOKING_SECRET` en `.env`, configurar en Booking extranet el webhook `https://tu-dominio.com/api/booking-sync/webhook`. Logs en `/admin/reportes`.

## Seguridad
- bcryptjs hashing, jose JWT HS256 7d, cookies httpOnly, CSRF sameSite=lax, validación zod, RBAC en cada handler y middleware, transacciones Prisma.

## Deploy
Vercel/Node: `npm run build` ya pasa (35 rutas). Configurar `DATABASE_URL` y `JWT_SECRET` en env vars.
