import { Suspense } from "react"
import ReservasClient from "./ReservasClient"
export default function Page(){
  return <Suspense fallback={<div className="p-8">Cargando motor de reservas...</div>}><ReservasClient/></Suspense>
}
