import { WeatherIcon } from './WeatherIcon.tsx'

interface DailyCardProps {
  day: string;
  high: number;
  low: number;
  weatherCode: number;
}

export function DailyCard({ day, high, low, weatherCode }: DailyCardProps) {
  return (
    <article className="bg-neutral-800 border border-neutral-600 rounded-xl px-2.5 py-3 md:py-4 flex flex-col items-center gap-4">
      <h4 className="text-preset-6">{day.slice(0, 3)}</h4>
      <WeatherIcon code={weatherCode} alt={`Weather icon for ${day}`} isDay={1} classname="size-15" />
      <div className="flex justify-between w-full">
        <p className="text-preset-7">{high}°</p>
        <p className="text-preset-7 text-neutral-200">{low}°</p>
      </div>
    </article>
  )
}
