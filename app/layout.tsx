import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import './globals.css'
import DisclaimerPopup from "@/components/DisclaimerPopup"

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "URE Legal",
  description: "URE Legal Advocates, established in 1999, specializes in commercial disputes and cross border transactions and taxation litigation and family law practices, having experience of 27 years continuous standing at the Bar in the Supreme Court of India, various High Courts, Commissions, Regulatory Bodies and Tribunals.",
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <DisclaimerPopup />
        {children}
      </body>
    </html>
  )
}
