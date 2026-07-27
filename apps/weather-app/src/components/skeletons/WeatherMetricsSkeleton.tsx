export function WeatherMetricsSkeleton() {
  return (
    <div className="mt-5 1xl:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 1xl:gap-6">
      <div className="space-y-6 p-5 bg-neutral-800 border border-neutral-600 rounded-[20px] animate-pulse">
        <p className="text-preset-6 text-neutral-200">Feels Like</p>
        <span className="text-preset-3">_</span>
      </div>
      <div className="space-y-6 p-5 bg-neutral-800 border border-neutral-600 rounded-[20px] animate-pulse">
        <p className="text-preset-6 text-neutral-200">Humidity</p>
        <span className="text-preset-3">_</span>
      </div>
      <div className="space-y-6 p-5 bg-neutral-800 border border-neutral-600 rounded-[20px] animate-pulse">
        <p className="text-preset-6 text-neutral-200">Wind</p>
        <span className="text-preset-3">_</span>
      </div>
      <div className="space-y-6 p-5 bg-neutral-800 border border-neutral-600 rounded-[20px] animate-pulse">
        <p className="text-preset-6 text-neutral-200">Precipitation</p>
        <span className="text-preset-3">_</span>
      </div>
    </div>
  )
}
