import { CurrentWeatherCard } from "./CurrentWeatherCard.tsx"
import { WeatherHero } from "./WeatherHero.tsx"

export function Main() {
  return (
    <main className="mt-12 1xl:mt-16">
      <WeatherHero />
      <div className="mt-8">
        <CurrentWeatherCard />
      </div>
    </main>
  )
}
