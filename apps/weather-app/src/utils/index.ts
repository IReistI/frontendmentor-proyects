import iconDrizzle from '../assets/icons/icon-drizzle.webp'
import iconFog from '../assets/icons/icon-fog.webp'
import iconOvercast from '../assets/icons/icon-overcast.webp'
import iconPartlyCloudy from '../assets/icons/icon-partly-cloudy.webp'
import iconPartlyCloudyNight from '../assets/icons/icon-partly-cloudy-night.svg'
import iconRain from '../assets/icons/icon-rain.webp'
import iconSnow from '../assets/icons/icon-snow.webp'
import iconStorm from '../assets/icons/icon-storm.webp'
import iconSunny from '../assets/icons/icon-sunny.webp'
import iconClear from '../assets/icons/icon-clear.svg'
import iconUnknown from '../assets/icons/icon-unknown.png'

// create time range
export const range = (start: number, stop: number, step: number) => Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

export const formatDate = (date: Date, timeZone?: string) => {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
        ...(timeZone ? { timeZone } : {})
    });
    return formattedDate.format(date);
};

export const convertTemp = (celsius, toCelsius) => {
  if (toCelsius) return Math.round(celsius);
  return Math.round((celsius * 9) / 5 + 32); //Fahrenheit
};

export const convertWind = (kmh, unit) => {
  if (unit === 'kmh') return Math.round(kmh);
  return Math.round(kmh * 0.621371); // Mille
};

export const getWeatherIcon = (code: number, isDay: number) => {
    const isDayTime = Boolean(isDay);

    switch(true) {
        case code === 0 || code < 1:
            return isDayTime ? iconSunny : iconClear;
        case [1, 2].includes(code):
            return isDayTime ? iconPartlyCloudy : iconPartlyCloudyNight
        case code === 3:
            return iconOvercast;
        case [45, 48].includes(code):
            return iconFog;
        case [51, 53, 55, 56, 57].includes(code):
            return iconDrizzle;
        case [61, 63, 65, 80, 81, 82].includes(code):
            return iconRain;
        case [71, 73, 75, 77, 85, 86].includes(code):
            return iconSnow;
        case [95, 96, 99].includes(code):
            return iconStorm;
        default:
            return iconUnknown;
    }
}