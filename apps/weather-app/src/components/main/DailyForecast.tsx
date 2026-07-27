import { useWeatherStore } from '../../store/weatherStore.ts'
import { DailyCard } from './DailyCard.tsx'

export function DailyForecast() {
  const daily = useWeatherStore((state) => state.weather?.daily)
  if (!daily) return null
  
  const days = daily.time.map((date, index) => {
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      high: Math.round(daily.temperatureMax[index]),
      low: Math.round(daily.temperatureMin[index]),
      weatherCode: daily.weatherCode[index]
    }
  })
  return (
    <section aria-labelledby="daily-title" className="mt-8 1xl:mt-12">
      <h2 className='text-preset-5' id="daily-title">Daily Forecast</h2>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-4 mt-5">
        {
          days.map((day) => (
            <DailyCard
              key={day.day}
              day={day.day}
              high={day.high}
              low={day.low}
              weatherCode={day.weatherCode}
            />
          ))
        }
      </div>
    </section>
  )
}