import type {Metadata} from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Scorer254 - Kenyan football news and grassroots stories",
    template: "%s | Scorer254",
  },
  description:
    "Scorer254 covers grassroots football, Kenyan soccer, player stories, match reports and regional football news.",
  openGraph: {
    title: "Scorer254 - Kenyan football news and grassroots stories",
    description:
      "Grassroots football stories from Kenya, with regional and international coverage.",
    siteName: "Scorer254",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scorer254",
    description:
      "Grassroots football stories from Kenya, with regional and international coverage.",
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
