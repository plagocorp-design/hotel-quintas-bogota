export type RoomTypeCard = {
  slug:string; name:string; capacity:number; price:number; image:string; amenities:string[]; description:string; beds:string;
}
export const roomTypes: RoomTypeCard[] = [
  { slug:"sencilla", name:"Habitación Sencilla", capacity:1, price:80000, image:"https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80", amenities:["WiFi gratis","TV pantalla plana","Baño privado","Ducha"], beds:"1 cama individual", description:"Ideal para viajeros solos, tranquila y cómoda." },
  { slug:"doble", name:"Habitación Doble", capacity:2, price:110000, image:"https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80", amenities:["WiFi gratis","Baño privado","Suelo parquet","TV cable"], beds:"1 cama doble", description:"Perfecta para parejas, con amplitud y luz natural." },
  { slug:"triple", name:"Habitación Triple", capacity:3, price:130000, image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80", amenities:["WiFi gratis","Baño privado","Servicio habitación"], beds:"1 cama individual + 1 cama doble", description:"Equilibrio ideal para familia pequeña o amigos." },
  { slug:"familiar", name:"Habitación Familiar", capacity:5, price:180000, image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", amenities:["4 personas","TV","Balcón opcional","Camas grandes"], beds:"2 camas dobles grandes", description:"Amplia, para 4-5 huéspedes, muy solicitada." },
  { slug:"familiar-bañera", name:"Habitación Familiar con bañera", capacity:5, price:200000, image:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80", amenities:["Bañera","Bidet","Interconectada","Zona estar"], beds:"1 individual + 1 doble + 1 doble grande", description:"La más completa, con bañera y espacio extra." },
];

export const testimonials = [
  { name:"Estefanía", text:"El desayuno delicioso, muy amable todo el personal. Excelente ubicación", country:"Colombia" },
  { name:"Salcedo", text:"Nos gustó la amabilidad del personal. Nos hizo sentir como en casa.", country:"Colombia" },
  { name:"Zolange", text:"La alcoba 302 amplia e iluminada. Camas y almohadas cómodas. Baño con agua caliente. Desayuno completo.", country:"Colombia" },
  { name:"Martha", text:"La cama muy cómoda y calientita. Limpieza impecable. No se escuchaban ruidos del exterior.", country:"Colombia" },
  { name:"Lilibeth", text:"Cercanía a embajada, me hospedé por cita de visa. Parque al frente, recomendable con niños.", country:"Colombia" },
];

export const services = [
  { icon:"📶", title:"WiFi gratis", desc:"Fibra en todo el hotel" },
  { icon:"🛎️", title:"Recepción 24h", desc:"Equipo siempre atento" },
  { icon:"🍳", title:"Desayuno excepcional", desc:"Completo, casero y delicioso" },
  { icon:"🧹", title:"Limpieza diaria", desc:"Habitaciones impecables" },
  { icon:"👨‍👩‍👧‍👦", title:"Habitaciones familiares", desc:"Hasta 5 personas, interconectadas" },
  { icon:"🛡️", title:"Seguridad 24h", desc:"Cámaras y personal" },
  { icon:"🛋️", title:"Zonas de esparcimiento", desc:"Sala, patio al aire libre" },
  { icon:"🚿", title:"Agua caliente", desc:"Ducha con buena presión" },
];

export const mockReservations = [
  { code:"HQB-2026-042", guest:"Andrea Molina", room:"302 Familiar", checkIn:"2026-09-10", checkOut:"2026-09-12", status:"CONFIRMADA", source:"BOOKING", price:360000 },
  { code:"HQB-2026-043", guest:"John Smith", room:"201 Doble", checkIn:"2026-09-09", checkOut:"2026-09-11", status:"CHECKIN", source:"WEB", price:220000 },
  { code:"HQB-2026-044", guest:"Familia Rojas", room:"101 Triple", checkIn:"2026-09-11", checkOut:"2026-09-14", status:"PENDIENTE", source:"WHATSAPP", price:390000 },
  { code:"HQB-2026-045", guest:"Luis García", room:"105 Sencilla", checkIn:"2026-09-08", checkOut:"2026-09-09", status:"CHECKOUT", source:"WALKIN", price:80000 },
];

export const mockRooms = [
  { number:"101", type:"Triple", status:"DISPONIBLE" as const, floor:1 },
  { number:"102", type:"Doble", status:"OCUPADA" as const, floor:1 },
  { number:"201", type:"Doble", status:"OCUPADA" as const, floor:2 },
  { number:"302", type:"Familiar", status:"LIMPIEZA" as const, floor:3 },
  { number:"303", type:"Familiar con bañera", status:"DISPONIBLE" as const, floor:3 },
  { number:"104", type:"Sencilla", status:"MANTENIMIENTO" as const, floor:1 },
];
