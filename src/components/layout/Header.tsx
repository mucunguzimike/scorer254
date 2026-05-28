import Image from "next/image"

const navItems = [
  "Home",
  "Grassroots",
  "Kenya",
  "Matches",
  "Players",
  "Regional",
  "World",
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070707]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-black">
            <Image
              src="/logo.png"
              alt="Scorer254 logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-xl font-black uppercase tracking-tight text-white">
              Scorer254
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-400">
              Kenya football stories
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-5 whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-zinc-300 lg:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="transition hover:text-emerald-400">
              {item}
            </a>
          ))}
        </nav>

        <button className="rounded-full border border-emerald-400/50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-300 transition hover:bg-emerald-400 hover:text-black">
          Submit Story
        </button>
      </div>
    </header>
  )
}
