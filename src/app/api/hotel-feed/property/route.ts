import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const csv = `hotel_id,name,description,star_rating,address_line1,address_line2,city,region,postal_code,country_code,latitude,longitude,phone_number,email,website_url,checkin_time,checkout_time,amenities
HQBOG001,Hotel Quintas de Bogotá,"Hotel boutique en Teusaquillo, cerca a la Embajada Americana y Corferias. Habitaciones con baño privado, WiFi gratuito, desayuno incluido y parqueadero.",3,Cl. 22 Bis #44A-19,,Bogotá,Cundinamarca,110311,CO,4.6227,-74.0839,+573176760460,info@hotelquintasdebogota.com,https://www.hotelquintasdebogota.com,14:00,12:30,"WiFi,Breakfast,Parking,24hReception,NonSmoking,AC"`;

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
