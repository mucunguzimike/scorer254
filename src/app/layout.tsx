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
    default: "Scorer254 - Kenyan football news and grassroots stories",
    template: "%s | Scorer254",
  },
  description: defaultDescription,
  openGraph: {
    title: "Scorer254 - Kenyan football news and grassroots stories",
    description: "Football stories from Kenya, with regional and international coverage.",
    siteName,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scorer254 - Kenyan football news and grassroots stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scorer254",
    description: "Football stories from Kenya, with regional and international coverage.",
    images: ["/og-image.png"],
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
