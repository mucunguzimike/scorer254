import Image from "next/image"
import Link from "next/link"
import type {SanitySiteSettings} from "@/sanity/lib/types"
import {mergeSiteSettings} from "@/lib/siteSettings"

type FooterProps = {
  settings?: SanitySiteSettings | null
}

export function Footer({settings}: FooterProps) {
  const site = mergeSiteSettings(settings)

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.2fr_2fr] lg:px-6">
        <div className="flex gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/15 bg-black">
            <Image src="/logo.png" alt={`${site.siteName} logo`} fill sizes="64px" className="object-cover" />
          </div>
          <div>
            <p className="text-2xl font-black uppercase text-white">{site.siteName}</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-400">
              {site.footerText || site.tagline}
            </p>
          </div>
        </div>

        <div className="grid gap-6 text-sm text-zinc-400 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-bold uppercase text-white">Coverage</p>
            <p>Grassroots</p>
            <p>Kenyan Football</p>
            <p>Women’s Football</p>
          </div>
          <div>
            <p className="mb-3 font-bold uppercase text-white">Sections</p>
            <p>Match Reports</p>
            <p>Player Watch</p>
            <p>Regional Football</p>
          </div>
          <div>
            <p className="mb-3 font-bold uppercase text-white">Contact</p>
            {site.contactEmail ? (
              <p>{site.contactEmail}</p>
            ) : (
              <p>Tips, stories and local football leads.</p>
            )}
          </div>
        </div>
        <nav aria-label="Site information" className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-zinc-300 lg:col-span-2">
          <Link href="/about" className="transition-colors hover:text-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400">About Us</Link>
          <Link href="/contact" className="transition-colors hover:text-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400">Contact Us</Link>
          <Link href="/privacy-policy" className="transition-colors hover:text-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  )
}
