type EmptyStateProps = {
  title: string
  description: string
}

export function EmptyState({title, description}: EmptyStateProps) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-8 text-center">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
        No content yet
      </p>
      <h2 className="text-2xl font-black uppercase text-white">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-400">
        {description}
      </p>
    </div>
  )
}
