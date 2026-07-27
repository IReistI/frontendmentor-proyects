import { useWeatherStore } from "../../store/weatherStore.ts"
import { MetricCard } from "./MetricCard.tsx"

export function WeatherMetrics() {
  const current = useWeatherStore((state) => state.weather?.current)
  if (!current) return null
  
  return (
    <section className="mt-5 1xl:mt-8" aria-labelledby="metrics-title">
      <h2 id="metrics-title" className="sr-only">Current weather metrics</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 1xl:gap-6">
        <MetricCard title="Feels Like" metric={`${Math.round(current.apparentTemperature)}°`} />
        <MetricCard title="Humidity" metric={`${Math.round(current.relativeHumidity)}%`} />
        <MetricCard title="Wind" metric={`${Math.round(current.windSpeed)} km/h`} />
        <MetricCard title="Precipitation" metric={`${current.precipitation.toFixed(1)} mm`} />
      </div>
    </section>
  )
}
