import type {Metadata} from "next"
import {Header} from "@/components/layout/Header"
import {Footer} from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Contact Scorer254",
  description: "Get in touch with Scorer254 for story tips, corrections, partnerships and advertising. Email oderoedward452@gmail.com.",
}

export default function ContactPage() {
  return (
    <main className="info-page min-h-screen bg-[#070707] text-white">
      <Header />
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <p className="mb-3 text-xs font-heading font-black uppercase tracking-[0.25em] text-emerald-400">Get in touch</p>
          <h1 className="text-5xl font-heading font-black uppercase tracking-[-0.03em] text-white lg:text-6xl">Contact Scorer254</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">Story tips, corrections, partnerships and advertising enquiries.</p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <article className="max-w-4xl space-y-8 rounded-2xl border border-white/10 bg-zinc-950 p-6 text-zinc-300 shadow-lg shadow-black/20 sm:p-10">
      <p className="mb-5 text-lg leading-8">We read every message. The fastest way to reach us is by email.</p>
      <p className="mb-10 break-words text-lg"><strong className="text-white">Email:</strong> <a className="text-emerald-400 underline underline-offset-4" href="mailto:oderoedward452@gmail.com">oderoedward452@gmail.com</a></p>
      <section className="border-t border-white/10 pt-7">
        <h2 className="mb-4 text-2xl font-heading font-black uppercase tracking-tight text-white">Write to us about</h2>
        <ul className="list-disc space-y-3 pl-6 leading-7">
          <li><strong className="text-white">Story tips:</strong> a match result, a player story, a club or school team we should cover.</li>
          <li><strong className="text-white">Corrections:</strong> tell us the article, what is wrong and a source if you have one. We aim to review corrections within 48 hours.</li>
          <li><strong className="text-white">Photos:</strong> if you took a photo and want it used with credit, send it with your name and permission.</li>
          <li><strong className="text-white">Advertising and partnerships:</strong> clubs, tournaments, academies and brands that want to work with Scorer254.</li>
          <li><strong className="text-white">Image or copyright concerns:</strong> if you believe we have used your work without permission, email us with a link to the page and we will act quickly.</li>
        </ul>
      </section>
      <section className="border-t border-white/10 pt-7">
        <h2 className="mb-4 text-2xl font-heading font-black uppercase tracking-tight text-white">Social media</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>X: <a href="https://x.com/EdSCORER254" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline underline-offset-4">@EdSCORER254</a></li>
          <li>YouTube: <a href="https://www.youtube.com/@scorer254" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline underline-offset-4">youtube.com/@scorer254</a></li>
        </ul>
      </section>
      <p className="leading-8"><strong className="text-white">Location:</strong> Nairobi, Kenya</p>
        </article>
      </div>
      <Footer />
    </main>
  )
}
