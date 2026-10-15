import type {Metadata} from "next"
import {Header} from "@/components/layout/Header"
import {Footer} from "@/components/layout/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Scorer254 - Kenyan football news",
  description: "Scorer254 is a Nairobi-based football site covering Kenyan football, grassroots stories and world football. Learn who we are and how we work.",
}

export default function AboutPage() {
  return (
    <main className="info-page min-h-screen bg-[#070707] text-white">
      <Header />
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <p className="mb-3 text-xs font-heading font-black uppercase tracking-[0.25em] text-emerald-400">Our story</p>
          <h1 className="text-5xl font-heading font-black uppercase tracking-[-0.03em] text-white lg:text-6xl">About Scorer254</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">Unfiltered football stories from Kenya and beyond.</p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <article className="max-w-4xl space-y-8 rounded-2xl border border-white/10 bg-zinc-950 p-6 text-zinc-300 shadow-lg shadow-black/20 sm:p-10">
      <p className="mb-10 text-lg leading-8">Scorer254 is a Kenyan football news site based in Nairobi. We tell football stories from Kenya and beyond: the Kenya Premier League, Harambee Stars and Harambee Starlets, school and grassroots football, and the biggest stories in world football.</p>
      <section className="border-t border-white/10 pt-7">
        <h2 className="mb-4 text-2xl font-heading font-black uppercase tracking-tight text-white">What we cover</h2>
        <ul className="list-disc space-y-3 pl-6 leading-7">
          <li><strong className="text-white">Kenyan football:</strong> league news, match previews and reports, Harambee Stars and Harambee Starlets, and FKF competitions.</li>
          <li><strong className="text-white">Grassroots and regional football:</strong> county tournaments, school football, academies and community teams that rarely get national coverage.</li>
          <li><strong className="text-white">World football:</strong> the Premier League, the Champions League, AFCON, the World Cup and the African players making their mark abroad.</li>
          <li><strong className="text-white">Explainers and guides:</strong> clear answers to the questions fans ask, from competition formats to stadium and fixture information.</li>
        </ul>
      </section>
      <section className="border-t border-white/10 pt-7">
        <h2 className="mb-4 text-2xl font-heading font-black uppercase tracking-tight text-white">How we work</h2>
        <p className="leading-8">We check facts against official sources such as FIFA, CAF, FKF, the clubs themselves and established news outlets, and we list our sources at the end of every article. We only use images we have the right to use, mainly our own photos and freely licensed images from Wikimedia Commons, and we credit them. When we get something wrong, we correct it. If you spot an error, email us at <a className="text-emerald-400 underline underline-offset-4" href="mailto:oderoedward452@gmail.com">oderoedward452@gmail.com</a>.</p>
      </section>
      <section className="border-t border-white/10 pt-7">
        <h2 className="mb-4 text-2xl font-heading font-black uppercase tracking-tight text-white">Follow Scorer254</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>X: <a href="https://x.com/EdSCORER254" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline underline-offset-4">@EdSCORER254</a></li>
          <li>YouTube: <a href="https://www.youtube.com/@scorer254" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline underline-offset-4">youtube.com/@scorer254</a></li>
        </ul>
      </section>
      <p className="leading-8">Have a story from your local team or school? We want to hear it. Visit our <Link className="text-emerald-400 underline underline-offset-4" href="/contact">Contact page</Link>.</p>
        </article>
      </div>
      <Footer />
    </main>
  )
}
