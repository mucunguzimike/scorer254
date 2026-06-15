import type {Metadata} from "next"
import {Roboto_Mono, Zilla_Slab} from "next/font/google"
import {defaultDescription, siteName, siteUrl} from "@/lib/site"
import "./globals.css"

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-zilla",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Scorer254 | Unfiltered Football: Kenya and Beyond",
    template: "%s | Scorer254",
  },
  description: defaultDescription,
  keywords: ["football", "Kenya", "soccer", "grassroots", "regional football", "African football", "Scorer254"],
  openGraph: {
    title: "Scorer254 | Unfiltered Football: Kenya and Beyond",
    description: defaultDescription,
    siteName,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scorer254 | Unfiltered Football: Kenya and Beyond",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scorer254 | Unfiltered Football: Kenya and Beyond",
    description: defaultDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  icons: {
    icon: [
      {url: "/favicon.ico"},
      {url: "/favicon.png", sizes: "32x32", type: "image/png"},
      {url: "/icon-192.png", sizes: "192x192", type: "image/png"},
      {url: "/icon-512.png", sizes: "512x512", type: "image/png"},
    ],
    apple: [
      {url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png"},
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${zillaSlab.variable} ${robotoMono.variable}`}>{children}</body>
    </html>
  )
}
