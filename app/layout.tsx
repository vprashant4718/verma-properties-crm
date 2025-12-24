import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Navbar from "./_components/navbar"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange 
           
          > 
            <Navbar />
            {children} 
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}