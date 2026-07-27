import { useState } from "react"
import { useWeatherStore } from "../../store/weatherStore.ts"

import { HourlyItem } from "./HourlyItem.tsx"
import { HourlyDropdown } from "./HourlyDropdown.tsx"
import iconDropdown from '../../assets/icons/icon-dropdown.svg'


export function HourlyForecast() {
  const [isOpen, setIsOpen] = useState(false)
  const selectedDate = useWeatherStore(state => state.selectedDate)
  const weather = useWeatherStore(state => state.weather?.hourly)
  if (!weather) return null

  const date = new Date(selectedDate)
  date.setMinutes(0, 0, 0)

  const index = weather.time.findIndex(hour => hour.getTime() === date.getTime())

  const hourlyDataForSelectedDay = Array.from({ length: 8 }, (_, i) => {
    const hourIndex = index + i

    return {
      time: weather.time[hourIndex].getHours(),
      temperature: Math.round(weather.temperature[hourIndex]),
      isDay: weather.is_day[hourIndex],
      weatherCode: weather.weatherCode[hourIndex],
    }
  })
  const actualDay = selectedDate.toLocaleDateString('en-US', { weekday: 'long' })
  
  return (
    <aside className="mt-8 1xl:mt-0 bg-neutral-800 px-4 md:px-6 py-5 md:py-6 rounded-[20px] 1xl:w-[384px]" aria-labelledby="hourly-title">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-preset-5" id="hourly-title">Hourly Forecast</h2>
        <div className="relative z-10">
          <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center gap-3 px-4 py-2 rounded-lg bg-neutral-600 cursor-pointer">
            <span className="font-dmsans text-preset-7">{actualDay}</span>
            <img src={iconDropdown} alt="Dropdown" />
          </button>
          {isOpen && <HourlyDropdown actualDay={actualDay} />}
        </div>

      </div>
      <div className="space-y-4">
        {
          hourlyDataForSelectedDay.map((hourlyItem, index) => (
            <HourlyItem
              key={index}
              hour={hourlyItem.time}
              temperature={hourlyItem.temperature}
              isDay={hourlyItem.isDay}
              code={hourlyItem.weatherCode}
            />
          ))
        }
      </div>
    </aside>
  )
}
