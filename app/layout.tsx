import type React from "react"
import type { Metadata } from "next"
import { Crimson_Pro, Source_Sans_3, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
})
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ibm-mono",
})

export const metadata: Metadata = {
  title: "Akshath Mangudi",
  description: "An average student with an interest in Deep Learning.",
  icons: {
    icon: "./icon.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${crimsonPro.variable} ${sourceSans.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
