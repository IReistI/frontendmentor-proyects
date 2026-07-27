export function DailySkeleton() {
  return (
    <div className="mt-8 1xl:mt-12">
      <p className="text-preset-5">Daily Forecast</p>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4 mt-5">
        {[...Array(7)].map((_, index) => (
          <div className="bg-neutral-800 border border-neutral-600 rounded-xl h-41 animate-pulse" key={index}></div>
        ))}
      </div>
    </div>
  )
}
