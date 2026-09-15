const HOTEL_WHATSAPP = "573176760460";

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

  let msg = "Hola, quiero reservar en Hotel Quintas de Bogotá.\n\n";
  msg += "Llegada: " + formatDateES(data.checkIn || "") + "\n";
  msg += "Salida: " + formatDateES(data.checkOut || "") + "\n";
  msg += "Noches: " + n + "\n";
  msg += "Personas: " + (data.adults || 2) + " adulto(s)";
  if ((data.children || 0) > 0) msg += " + " + data.children + " niño(s)";
  msg += "\n";
  msg += "Tipo: " + (data.roomType || "doble").charAt(0).toUpperCase() + (data.roomType || "doble").slice(1) + "\n";

  if (data.name) msg += "\nNombre: " + data.name + "\n";
  if (data.phone) msg += "Teléfono: " + data.phone + "\n";
  if (data.notes) msg += "\nNota: " + data.notes + "\n";

  msg += "\nPrecio estimado: " + formatCOP(total) + " (" + n + " noche(s))";
  msg += "\n\n¿Tienen disponibilidad? Gracias.";

  return msg;
}

export function buildBookingUrl(data: BookingData): string {
  const text = buildBookingMessage(data);
  return "https://wa.me/" + HOTEL_WHATSAPP + "?text=" + encodeURIComponent(text);
}

export function buildConfirmationMessage(reservationCode: string, data: BookingData): string {
  let msg = "Confirmación de reserva\n\n";
  msg += "Código: " + reservationCode + "\n";
  msg += "Hotel Quintas de Bogotá\n\n";
  msg += "Llegada: " + formatDateES(data.checkIn || "") + "\n";
  msg += "Salida: " + formatDateES(data.checkOut || "") + "\n";
  msg += "Habitación: " + (data.roomType || "doble").charAt(0).toUpperCase() + (data.roomType || "doble").slice(1) + "\n";
  msg += (data.adults || 2) + " adulto(s)";
  if ((data.children || 0) > 0) msg += " + " + data.children + " niño(s)";
  msg += "\n";
  if (data.name) msg += "\n" + data.name + "\n";
  msg += "\nReservé en hotelquintasdebogota.com. ¿Me pueden confirmar la habitación? Gracias.";

  return msg;
}

export function buildConfirmationUrl(reservationCode: string, data: BookingData): string {
  const text = buildConfirmationMessage(reservationCode, data);
  return "https://wa.me/" + HOTEL_WHATSAPP + "?text=" + encodeURIComponent(text);
}

export function buildDefaultUrl(): string {
  return "https://wa.me/" + HOTEL_WHATSAPP + "?text=" + encodeURIComponent("Hola, Hotel Quintas de Bogotá. Quiero información sobre disponibilidad y precios.");
}

export function buildAdvisoryUrl(): string {
  return "https://wa.me/" + HOTEL_WHATSAPP + "?text=" + encodeURIComponent("Hola, me gustaría recibir asesoría sobre hospedaje en Bogotá.");
}
