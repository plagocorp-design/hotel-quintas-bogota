import { cn } from "@/lib/utils"
export function Card({className,...p}:React.HTMLAttributes<HTMLDivElement>){return <div className={cn("rounded-[20px] bg-white border border-[#F0E6D2] shadow-sm",className)} {...p}/>}
export function CardHeader({className,...p}:React.HTMLAttributes<HTMLDivElement>){return <div className={cn("p-6 pb-2",className)} {...p}/>}
export function CardContent({className,...p}:React.HTMLAttributes<HTMLDivElement>){return <div className={cn("p-6 pt-2",className)} {...p}/>}
