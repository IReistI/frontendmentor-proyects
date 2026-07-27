import { getWeatherIcon } from "../../utils";

export function WeatherIcon({code, alt = "Weather Icon", isDay, classname = ""}: {code: number, isDay: number, alt?: string, classname?: string }) {
  const iconSrc = getWeatherIcon(code, isDay);

  return (
    <img 
      src={iconSrc} 
      alt={alt} 
      className={classname}
    />
  )
}
