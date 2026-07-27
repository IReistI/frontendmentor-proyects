import { WeatherIcon } from "./WeatherIcon"

interface HourlyItemProps {
  hour: number
  temperature: number
  isDay: number
  code: number
}

export function HourlyItem({hour, temperature, isDay, code}: HourlyItemProps) {
  return (
    <article className="flex justify-between items-center py-2.5 pl-3 pr-4 bg-neutral-700 rounded-lg border border-neutral-600">
      <div className="flex gap-2 items-center justify-between">
        <WeatherIcon code={code} isDay={isDay} alt={`Weather for hour ${hour}`} classname="size-10" />
        <p className="text-preset-5-medium">{hour > 12 ? `${hour - 12} PM` : `${hour} AM`}</p>
      </div>
      <p className="text-preset-7">{Math.round(temperature)}°</p>
    </article>
  )
}
