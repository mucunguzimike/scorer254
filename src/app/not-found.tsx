import Link from "next/link"
import {Footer} from "@/components/layout/Footer"
import {Header} from "@/components/layout/Header"
import {getSiteSettings} from "@/sanity/lib/fetchers"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Header />

      <section className="mx-auto flex min-h-[60vh] max-w-4xl flex-col justify-center px-4 py-16 lg:px-6">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
          404
        </p>
        <h1 className="text-5xl font-black uppercase leading-none tracking-tight text-white lg:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          The football story or page you are looking for is not available. It may have moved, been unpublished or never existed.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-emerald-300"
          >
            Back home
          </Link>
          <Link
            href="/articles"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:border-emerald-400 hover:text-emerald-400"
          >
            Latest stories
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
