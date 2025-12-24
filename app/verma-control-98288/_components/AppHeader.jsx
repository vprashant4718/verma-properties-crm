
import ModeToggle from '@/app/_components/ModeToggle'
import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

export default function AppHeader() {
  return (
    <div className='w-full flex items-center justify-between px-4 py-2 border-b border-border'>
        <SidebarTrigger />
        <div>
            <ModeToggle /> 
        </div>

    </div>
  )
}
