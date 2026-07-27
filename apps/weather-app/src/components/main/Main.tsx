import { useWeather } from "../../hooks/useWeather.ts"
import { CurrentWeatherSkeleton } from "../skeletons/CurrentWeatherSkeleton.tsx"
import { DailySkeleton } from "../skeletons/DailySkeleton.tsx"
import { HourlySkeleton } from "../skeletons/HourlySkeleton.tsx"
import { WeatherMetricsSkeleton } from "../skeletons/WeatherMetricsSkeleton.tsx"
import { CurrentWeatherCard } from "./CurrentWeatherCard.tsx"
import { DailyForecast } from "./DailyForecast.tsx"
import { HourlyForecast } from "./HourlyForecast.tsx"
import { WeatherHero } from "./WeatherHero.tsx"
import { WeatherMetrics } from "./WeatherMetrics.tsx"

export function Main() {
  const { loading } = useWeather()
  
  return (
    <main className="mt-12 1xl:mt-16">
      <WeatherHero />
      <div className="mt-8 1xl:mt-12 1xl:flex 1xl:gap-8">
        <div className="flex-1">
          {
            loading ? (
              <CurrentWeatherSkeleton />
            ) : (
              <CurrentWeatherCard />
            )
          }
          {
            loading ? (
              <WeatherMetricsSkeleton />
            ) : (
              <WeatherMetrics />
            )
          }
          {
            loading ? (
              <DailySkeleton />
            ) : (
              <DailyForecast />
            )
          }
        </div>
        {
          loading ? (
            <HourlySkeleton />
          ) : (
            <HourlyForecast />
          )
        }
      </div>
    </main>
  )
}
