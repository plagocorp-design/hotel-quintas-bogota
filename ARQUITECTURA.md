# Hotel Quintas de Bogotá - Arquitectura PMS + Web Pública

## 1. Visión General
Plataforma Next.js 15 App Router unificada: frontend público SEO + PMS privado. DB PostgreSQL + Prisma, Auth NextAuth, tiempo real via polling/SSE (evolucionable a WebSocket/Pusher).

```
[Cliente Web] --HTTPS--> [Next.js 15] --Prisma--> [PostgreSQL]
                           |  |
                           |  +--> [Cloudinary/S3] imágenes
                           |  +--> [WhatsApp Cloud API] webhook
                           |  +--> [Booking.com API] webhook + cron sync
[Admin PMS] ----Auth----> [NextAuth + RBAC]
```

## 2. Stack
- **Frontend**: Next.js 16.3.4 (App Router), React 19, Tailwind 4, shadcn/ui, lucide-react, recharts, date-fns, zod
- **Backend**: Next.js API Routes + Server Actions
- **DB**: PostgreSQL + Prisma 7 (ver schema.prisma)
- **Auth**: NextAuth.js 4 (Credentials, opcional 2FA TOTP)
- **Imágenes**: Cloudinary (fallback local /public)
- **Tiempo real**: SSE / Server-Sent Events + revalidateTag (migrable a Pusher)
- **i18n**: next-intl preparado (es por defecto)
- **Pagos futuro**: Wompi / PayU webhook

## 3. Roles y Permisos (RBAC)
| Rol | Permisos |
|-----|----------|
| ADMIN | todo |
| RECEPCION | reservas CRUD, checkin/out, WhatsApp, huéspedes |
| LIMPIEZA | ver calendario, actualizar estado habitación Limpieza->Disponible |
| CONTABILIDAD | reportes, pagos |

Middleware protege `/admin/*` verifica sesión + rol.

## 4. Modelo de Datos (Prisma) - Resumen
Ver `prisma/schema.prisma` completo. Entidades clave:
- User, RoomType, Room, Guest, Reservation, Payment, BlockedDate, RateSeason, WhatsAppConversation/Message/Template, SyncLog, HotelSettings

Estados:
- Room.status: DISPONIBLE, OCUPADA, LIMPIEZA, MANTENIMIENTO, BLOQUEADA
- Reservation.status: PENDIENTE, CONFIRMADA, CHECKIN, CHECKOUT, CANCELADA, NOSHOW
- Reservation.source: WEB, BOOKING, WHATSAPP, WALKIN, MANUAL
- Payment.status: PENDIENTE, PAGADO, PARCIAL, REEMBOLSADO

## 5. Integraciones

### A. Booking.com Channel Manager
**Flujo ideal (API oficial Booking Connectivity):**
1. Hotel registrado en Booking.com extranet -> habilita API push.
2. Webhook `POST /api/booking-sync/webhook` recibe `reservation.created/updated/cancelled` firmado con HMAC.
3. Valida firma, upsert en `Reservation` con `externalId=bookingId`, `source=BOOKING`, ajusta `Room.status` y `BlockedDate`.
4. Cron cada 5min `GET /api/booking-sync/pull` hace polling de fallback si no hay push.
5. Outbound: cuando admin crea/modifica reserva -> `SyncLog` + intento `POST https://distribution-xml.booking.com/...` para bloquear disponibilidad (si credenciales configuradas, sino queda en log pendiente).

**Simulación actual (sin credenciales reales):** webhook acepta JSON libre + panel `/admin` tiene botón "Simular reserva Booking" y logs visibles en `/admin/reportes`.

### B. WhatsApp Business Cloud API (Meta)
**Setup:**
1. App en developers.facebook.com -> WhatsApp Business -> obtener `WHATSAPP_TOKEN`, `PHONE_NUMBER_ID`, `VERIFY_TOKEN`.
2. Webhook `GET /api/whatsapp/webhook?hub.verify_token=...` para verificación.
3. `POST /api/whatsapp/webhook` recibe mensajes entrantes, guarda en `WhatsAppConversation/Message`, notifica admin via SSE.
4. Panel `/admin/whatsapp` lista conversaciones, permite responder (`POST https://graph.facebook.com/v20.0/{phoneId}/messages`), usar plantillas aprobadas, y botón "Crear reserva desde chat" que pre-rellena formulario con datos del contacto.
5. Jobs automáticos: confirmación al crear reserva, recordatorio 24h antes (cron), gracias post checkout.

Plantillas: `reserva_confirmada`, `recordatorio_checkin`, `agradecimiento_checkout` (variables {{1}} nombre, {{2}} fecha).

## 6. Flujos Críticos
1. **Booking -> PMS**: webhook -> Reservation CONFIRMADA -> Room OCUPADA en fechas -> calendario rojo -> SyncLog OK.
2. **WhatsApp -> Reserva**: mensaje entrante -> admin ve chat -> click "Crear reserva" -> modal con guest + fechas + room -> guardar -> Room bloqueada -> mensaje plantilla enviado.
3. **Web -> PMS**: usuario motor reservas -> validación zod -> check disponibilidad (query entre BlockedDate+Reservation) -> crea PENDIENTE -> admin confirma.
4. **Recepción unificada**: `/admin/reservas` filtra por source con badge color (azul Booking, verde WhatsApp, beige Web, gris Manual).

## 7. Diseño UI
Paleta: blanco #FFFFFF, beige #F5F1E8, verde suave #E8F0E8 / #2D5016, dorado #C9A86A, azul oscuro #1A2B4A. Tipografía: Playfair Display (titulos) + Inter (cuerpo). Estilo cálido familiar, cards redondeadas 2xl, sombras suaves.

## 8. SEO
Metadata por página, OG images, JSON-LD Hotel schema, sitemap.ts, robots.ts, canonical.

## 9. Estructura de Carpetas
```
src/app/(public)/page.tsx habitaciones/ galeria/ ubicacion/ servicios/ reservas/ contacto/
src/app/admin/* (protegido)
src/app/api/*
src/components/ui/* src/components/site/* src/components/admin/*
prisma/schema.prisma
```

## 10. Roadmap
Fase 1 (actual): mock data + UI completa + webhooks simulados + Prisma listo para migrar a Postgres.
Fase 2: conectar Postgres real (Neon/Supabase), NextAuth, Cloudinary.
Fase 3: credenciales reales Booking + WhatsApp, cron Vercel, Wompi.

