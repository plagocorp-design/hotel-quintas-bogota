import * as React from "react"
import { cn } from "@/lib/utils"
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default"|"outline"|"ghost"|"gold"
  size?: "default"|"sm"|"lg"|"icon"
}
export function Button({className, variant="default", size="default", ...props}: ButtonProps){
  const base="inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none disabled:opacity-50"
  const variants={
    default:"bg-[#1A2B4A] text-white hover:bg-[#243a63]",
    gold:"bg-[#C9A86A] text-white hover:bg-[#A68B4A]",
    outline:"border border-[#C9A86A] text-[#1A2B4A] hover:bg-[#F5F1E8]",
    ghost:"hover:bg-[#F5F1E8] text-[#1A2B4A]"
  }
  const sizes={ default:"h-10 px-6 py-2", sm:"h-8 px-4 text-sm", lg:"h-12 px-8 text-base", icon:"h-10 w-10"}
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props}/>
}
