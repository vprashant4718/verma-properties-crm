"use client"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./_components/app-sidebar"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import AppHeader from "./_components/AppHeader"
import "../globals.css"


export default function Layout({ children }: { children: React.ReactNode }) {

  const [user] = useState(false);
  const router = useRouter();

    useEffect(()=>{
      if(!user){
        router.replace("/verma-control-98288/Login")
      }
      else{
        router.replace("/verma-control-98288")
      }
    },[])
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full px-2">
        <AppHeader />
        <div className=" p-5 ">
        {children}

        </div>
      </main>
    </SidebarProvider>
  )
}