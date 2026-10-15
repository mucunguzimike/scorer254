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
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12 text-zinc-200 lg:px-6 lg:py-16">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-400">About Us</p>
      <h1 className="mb-6 text-4xl font-black text-white sm:text-5xl">About Scorer254</h1>
      <p className="mb-10 text-lg leading-8">Scorer254 is a Kenyan football news site based in Nairobi. We tell football stories from Kenya and beyond: the Kenya Premier League, Harambee Stars and Harambee Starlets, school and grassroots football, and the biggest stories in world football.</p>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold text-white">What we cover</h2>
        <ul className="list-disc space-y-3 pl-6 leading-7">
          <li><strong className="text-white">Kenyan football:</strong> league news, match previews and reports, Harambee Stars and Harambee Starlets, and FKF competitions.</li>
          <li><strong className="text-white">Grassroots and regional football:</strong> county tournaments, school football, academies and community teams that rarely get national coverage.</li>
          <li><strong className="text-white">World football:</strong> the Premier League, the Champions League, AFCON, the World Cup and the African players making their mark abroad.</li>
          <li><strong className="text-white">Explainers and guides:</strong> clear answers to the questions fans ask, from competition formats to stadium and fixture information.</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold text-white">How we work</h2>
        <p className="leading-8">We check facts against official sources such as FIFA, CAF, FKF, the clubs themselves and established news outlets, and we list our sources at the end of every article. We only use images we have the right to use, mainly our own photos and freely licensed images from Wikimedia Commons, and we credit them. When we get something wrong, we correct it. If you spot an error, email us at <a className="text-emerald-400 underline underline-offset-4" href="mailto:oderoedward452@gmail.com">oderoedward452@gmail.com</a>.</p>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold text-white">Follow Scorer254</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>X: <a href="https://x.com/EdSCORER254" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline underline-offset-4">@EdSCORER254</a></li>
          <li>YouTube: <a href="https://www.youtube.com/@scorer254" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline underline-offset-4">youtube.com/@scorer254</a></li>
        </ul>
      </section>
      <p className="leading-8">Have a story from your local team or school? We want to hear it. Visit our <Link className="text-emerald-400 underline underline-offset-4" href="/contact">Contact page</Link>.</p>
      </main>
      <Footer />
    </>
  )
}
