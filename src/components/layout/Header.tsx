import Image from "next/image"
import Link from "next/link"
import type {SanitySiteSettings} from "@/sanity/lib/types"
import {mergeSiteSettings} from "@/lib/siteSettings"

const navItems = [
  {label: "Home", href: "/"},
  {label: "Grassroots", href: "/grassroots"},
  {label: "Kenya", href: "/kenya"},
  {label: "Matches", href: "/matches"},
  {label: "Players", href: "/players"},
  {label: "Regional", href: "/regional"},
  {label: "World", href: "/world"},
]

type HeaderProps = {
  settings?: SanitySiteSettings | null
}

export function Header({settings}: HeaderProps) {
  const site = mergeSiteSettings(settings)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070707]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-black">
            <Image
              src="/logo.png"
              alt={`${site.siteName} logo`}
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-xl font-black uppercase tracking-tight text-white">
              {site.siteName}
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-400">
              {site.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-zinc-300 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-emerald-400">
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="group relative lg:hidden">
          <summary className="list-none rounded-full border border-white/15 px-4 py-2 text-xs font-black uppercase tracking-wide text-white marker:hidden">
            Menu
          </summary>

          <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">
            <nav className="flex flex-col p-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wide text-zinc-300 transition hover:bg-white/10 hover:text-emerald-400"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/articles"
                className="rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wide text-zinc-300 transition hover:bg-white/10 hover:text-emerald-400"
              >
                Articles
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  )
}
