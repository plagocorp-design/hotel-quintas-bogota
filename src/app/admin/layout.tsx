"use client"
import { usePathname } from "next/navigation"
import Sidebar from "@/components/admin/Sidebar"

export default function AdminLayout({children}:{children:React.ReactNode}){
  const pathname = usePathname()
  const isLoginPage = pathname === "/admin/login"

  if (isLoginPage) {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F1E8]">
      <Sidebar/>
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="shrink-0 bg-white border-b px-6 py-3 flex justify-between items-center sticky top-0 z-10">
          <div className="font-semibold text-sm md:text-base">Panel de Administración — Hotel Quintas de Bogotá</div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">● Online</span>
            <a href="/" className="text-sm text-[#000000] underline">Ver web</a>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 scrollbar-thin scrollbar-thumb-[#C9A86A]/40 hover:scrollbar-thumb-[#C9A86A]">
          {children}
        </main>
      </div>
    </div>
  )
}
