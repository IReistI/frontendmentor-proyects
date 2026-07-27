interface MetricCardProps {
  title: string;
  metric: string;
}

export function MetricCard({title, metric}: MetricCardProps) {
  return (
    <article className="p-5 bg-neutral-800 rounded-xl border border-neutral-600 space-y-6">
      <h4 className="text-preset-6 text-neutral-200">{title}</h4>
      <p className="text-preset-3 text-neutral-0">{metric}</p>
    </article>
  )
}
