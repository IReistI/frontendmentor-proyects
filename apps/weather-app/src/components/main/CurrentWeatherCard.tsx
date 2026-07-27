import { useWeatherStore } from "../../store/weatherStore.ts"
import { useLocationStore } from "../../store/locationStore.ts"
import { formatDate } from "../../utils/index.ts"

import BgImage from "../../assets/images/bg-today-small.svg"
import { WeatherIcon } from "./WeatherIcon.tsx"

export function CurrentWeatherCard() {
  const current = useWeatherStore((state) => state.weather?.current)
  const country = useLocationStore((state) => state.initialLocation.country)
  const place = useLocationStore((state) => state.initialLocation.place)
  
  if (!current) return null

  return (
    <div className="px-6 py-6 mx-auto bg-no-repeat bg-cover bg-center space-y-4 md:space-y-0 rounded-[20px] flex flex-col md:flex-row min-h-64 justify-center md:justify-between md:items-center" style={{ backgroundImage: `url(${BgImage})`}}>
      <div className="space-y-3 text-center md:text-left">
        <h2 className="text-preset-4">{place}, {country}</h2>
        <p className="text-preset-6 opacity-80 font-medium font-dmsans">{formatDate(current.time)}</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <WeatherIcon code={current.weatherCode} isDay={current.is_day} alt={current.is_day === 1 ? "Sunny" : "Nightly"} classname="size-30" />
        <p className="text-preset-1">{Math.round(current.temperature)}°</p>
      </div>
    </div>
  )
}
