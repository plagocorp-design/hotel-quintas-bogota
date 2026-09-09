"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@hotelquintas.com");
  const [password, setPassword] = useState("admin123");
  const [err, setErr] = useState("");
  const router = useRouter();
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    const res = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
    const data = await res.json();
    if (!res.ok) setErr(data.error || "Error");
    else router.push("/admin");
  };
  return (
    <div className="min-h-screen grid place-items-center bg-[#F5F1E8] p-4">
      <Card className="p-8 w-full max-w-md">
        <div className="font-serif text-2xl font-bold text-center">Hotel Quintas — Admin</div>
        <p className="text-sm text-gray-500 text-center">Ingresa con tu cuenta de recepción</p>
        <form onSubmit={submit} className="mt-6 space-y-3">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" className="w-full border rounded-xl px-3 py-2"/>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="contraseña" className="w-full border rounded-xl px-3 py-2"/>
          {err && <div className="text-sm text-red-600 bg-red-50 p-2 rounded-xl">{err}</div>}
          <Button type="submit" className="w-full">Ingresar</Button>
          <div className="text-xs text-gray-500">Demo: admin@hotelquintas.com / javier@hotelquintas.com / limpieza@hotelquintas.com — pass: admin123</div>
        </form>
      </Card>
    </div>
  );
}
