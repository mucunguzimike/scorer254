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
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Scorer254 logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scorer254",
    description: "Grassroots football stories from Kenya, with regional and international coverage.",
    images: ["/logo.png"],
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
