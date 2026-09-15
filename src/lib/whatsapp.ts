const HOTEL_WHATSAPP = "573176760460";

// Emojis via Unicode escapes - never break in URLs
const E = {
  hotel: "\uD83C\uDFE8",
  calendar: "\uD83D\uDCC5",
  moon: "\uD83C\uDF19",
  people: "\uD83D\uDC65",
  bed: "\uD83D\uDECF\uFE0F",
  person: "\uD83D\uDC64",
  phone: "\uD83D\uDCF1",
  note: "\uD83D\uDCDD",
  money: "\uD83D\uDCB0",
  check: "\u2705",
  plane: "\u2708\uFE0F",
};

export interface BookingData {
  name?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
  roomType?: string;
  notes?: string;
}

function formatDateES(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("es-CO", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

function nights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const a = new Date(checkIn + "T12:00:00");
  const b = new Date(checkOut + "T12:00:00");
  return Math.round((b.getTime() - a.getTime()) / 86400000);
}

const ROOM_PRICES: Record<string, number> = {
  sencilla: 80000,
  doble: 90000,
  triple: 140000,
  cuadruple: 160000,
  quadruple: 160000,
  familiar: 160000,
};

function formatCOP(value: number): string {
  return "$" + value.toLocaleString("es-CO");
}

export function buildBookingMessage(data: BookingData): string {
  const n = nights(data.checkIn || "", data.checkOut || "");
  const roomSlug = (data.roomType || "doble").toLowerCase();
  const pricePerNight = ROOM_PRICES[roomSlug] || 90000;
  const total = pricePerNight * n * Math.max(1, (data.adults || 2) > 2 ? Math.ceil((data.adults || 2) / 2) : 1);

  let msg = "\u00A1Hola, quiero reservar en Hotel Quintas de Bogot\u00E1 " + E.hotel + "\n\n";
  msg += E.calendar + " *Llegada:* " + formatDateES(data.checkIn || "") + "\n";
  msg += E.calendar + " *Salida:* " + formatDateES(data.checkOut || "") + "\n";
  msg += E.moon + " *Noches:* " + n + "\n";
  msg += E.people + " *Personas:* " + (data.adults || 2) + " adulto(s)";
  if ((data.children || 0) > 0) msg += " + " + data.children + " ni\u00F1o(s)";
  msg += "\n";
  msg += E.bed + " *Tipo:* " + (data.roomType || "doble").charAt(0).toUpperCase() + (data.roomType || "doble").slice(1) + "\n";

  if (data.name) msg += "\n" + E.person + " *Nombre:* " + data.name + "\n";
  if (data.phone) msg += E.phone + " *Tel\u00E9fono:* " + data.phone + "\n";
  if (data.notes) msg += "\n" + E.note + " *Nota:* " + data.notes + "\n";

  msg += "\n" + E.money + " *Precio estimado:* " + formatCOP(total) + " (" + n + " noche(s))";
  msg += "\n\n\u00BFTienen disponibilidad? \u00A1Gracias!";

  return msg;
}

export function buildBookingUrl(data: BookingData): string {
  const text = buildBookingMessage(data);
  return "https://wa.me/" + HOTEL_WHATSAPP + "?text=" + encodeURIComponent(text);
}

export function buildConfirmationMessage(reservationCode: string, data: BookingData): string {
  let msg = E.check + " *Confirmaci\u00F3n de reserva*\n\n";
  msg += "C\u00F3digo: *" + reservationCode + "*\n";
  msg += "Hotel Quintas de Bogot\u00E1\n\n";
  msg += E.calendar + " Llegada: " + formatDateES(data.checkIn || "") + "\n";
  msg += E.calendar + " Salida: " + formatDateES(data.checkOut || "") + "\n";
  msg += E.bed + " Habitaci\u00F3n: " + (data.roomType || "doble").charAt(0).toUpperCase() + (data.roomType || "doble").slice(1) + "\n";
  msg += E.people + " " + (data.adults || 2) + " adulto(s)";
  if ((data.children || 0) > 0) msg += " + " + data.children + " ni\u00F1o(s)";
  msg += "\n";
  if (data.name) msg += "\n" + E.person + " " + data.name + "\n";
  msg += "\nReserv\u00E9 en hotelquintasdebogota.com. \u00BFMe pueden confirmar la habitaci\u00F3n? \u00A1Gracias!";

  return msg;
}

export function buildConfirmationUrl(reservationCode: string, data: BookingData): string {
  const text = buildConfirmationMessage(reservationCode, data);
  return "https://wa.me/" + HOTEL_WHATSAPP + "?text=" + encodeURIComponent(text);
}

export function buildDefaultUrl(): string {
  return "https://wa.me/" + HOTEL_WHATSAPP + "?text=" + encodeURIComponent("\u00A1Hola! Hotel Quintas de Bogot\u00E1. Quiero informaci\u00F3n sobre disponibilidad y precios.");
}

export function buildAdvisoryUrl(): string {
  return "https://wa.me/" + HOTEL_WHATSAPP + "?text=" + encodeURIComponent("\u00A1Hola! Me gustar\u00EDa recibir asesor\u00EDa sobre hospedaje en Bogot\u00E1.");
}
