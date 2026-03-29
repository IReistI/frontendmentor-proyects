import { WeatherSearch } from "./WeatherSearch.tsx";

export function WeatherHero() {
  return (
    <section id="weather-hero">
      <h1 className="text-preset-2 text-center">How's the sky looking today?</h1>
      <WeatherSearch />
    </section>
  )
}
