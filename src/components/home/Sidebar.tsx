export function Sidebar() {
  const tags = ["KPL", "FKF", "Grassroots", "Academies", "Transfers", "CAF", "Women’s Football"]

  return (
    <aside className="space-y-5">
      <div className="rounded-[1.5rem] border border-emerald-400/30 bg-emerald-400 p-5 text-black">
        <p className="text-xs font-black uppercase tracking-[0.25em]">Community desk</p>
        <h2 className="mt-3 text-2xl font-black uppercase leading-tight">
          Know a grassroots football story?
        </h2>
        <p className="mt-3 text-sm font-medium leading-6">
          Send tips about teams, players, coaches, tournaments and local football issues across Kenya.
        </p>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5">
        <h2 className="mb-4 text-xl font-black uppercase text-white">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold uppercase text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  )
}
