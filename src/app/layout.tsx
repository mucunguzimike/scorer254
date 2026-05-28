import type {Metadata} from "next"
import {defaultDescription, siteName, siteUrl} from "@/lib/site"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Scorer254 - Kenyan football news and grassroots stories",
    template: "%s | Scorer254",
  },
  description: defaultDescription,
  openGraph: {
    title: "Scorer254 - Kenyan football news and grassroots stories",
    description: "Grassroots football stories from Kenya, with regional and international coverage.",
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
    description: "Grassroots football stories from Kenya, with regional and international coverage.",
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
      <body>{children}</body>
    </html>
  )
}
