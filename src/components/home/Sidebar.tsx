export function Sidebar() {
  const tags = ["KPL", "FKF", "Grassroots", "Academies", "Transfers", "CAF", "Women’s Football"]

  return (
    <aside className="space-y-5">
      <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5">
        <h2 className="mb-4 text-xl font-heading font-black uppercase text-white">Popular Tags</h2>
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
