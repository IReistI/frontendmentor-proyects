import { fetchWeatherApi } from "openmeteo";
import { range } from "../utils";

const URL = 'https://api.open-meteo.com/v1/forecast';

export const getWeatherByCoords = async (lat: number, lon: number) => {
    const params = {
        latitude: lat,
        longitude: lon,
        current: [
            "temperature_2m",
            "apparent_temperature",
            "relative_humidity_2m",
            "wind_speed_10m",
            "precipitation",
            "is_day",
            "weathercode"
        ],
        hourly: [
            "temperature_2m",
            "is_day",
            "weathercode"
        ],
        daily: [
            "temperature_2m_mean",
            "apparent_temperature_mean",
            "temperature_2m_max",
            "temperature_2m_min",
            "wind_speed_10m_max",
            "precipitation_sum",
            "weathercode"
        ],
        forecast_days: 7,
        timezone: "auto",
    }
    try {
        const responses = await fetchWeatherApi(URL, params);
        if (!responses || responses.length === 0) {
            throw new Error("No weather data found");
        }
        const response = responses[0];

        // const utcOffsetSeconds = response.utcOffsetSeconds();

        const current = response.current();
        const hourly = response.hourly();
        const daily = response.daily();

        if (!current || !hourly || !daily) {
            throw new Error("Critical API weather data is missing");
        }

        const hourlyTemp = hourly.variables(0)?.valuesArray();
        const hourlyIsDay = hourly.variables(1)?.valuesArray();
        const hourlyCode = hourly.variables(2)?.valuesArray();

        const dailyTempMax = daily.variables(0)?.valuesArray();
        const dailyTempMin = daily.variables(1)?.valuesArray();
        const dailyApparent = daily.variables(2)?.valuesArray();
        const dailyWind = daily.variables(3)?.valuesArray();
        const dailyPrecip = daily.variables(4)?.valuesArray();
        const dailyCode = daily.variables(5)?.valuesArray();

        if (
            !hourlyTemp || !hourlyIsDay || !hourlyCode ||
            !dailyTempMax || !dailyTempMin || !dailyApparent ||
            !dailyWind || !dailyPrecip || !dailyCode
        ) {
            throw new Error("The API returned incomplete (null) data in the arrays");
        }

        const WeatherData = {
            current: {
                time: new Date(Number(current.time()) * 1000),
                temperature: current.variables(0)!.value(),
                apparentTemperature: current.variables(1)!.value(),
                relativeHumidity: current.variables(2)!.value(),
                windSpeed: current.variables(3)!.value(),
                precipitation: current.variables(4)!.value(),
                is_day: current.variables(5)!.value(),
                weatherCode: current.variables(6)!.value(),
            },
            hourly: {
                time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
                    (t) => new Date(t * 1000)
                ),
                temperature: hourlyTemp,
                is_day: hourlyIsDay,
                weatherCode: hourlyCode,
            },
            daily: {
                time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
                    (t) => new Date(t * 1000)
                ),
                temperatureMax: dailyTempMax,
                temperatureMin: dailyTempMin,
                apparentTemperature: dailyApparent,
                windSpeed: dailyWind,
                precipitation: dailyPrecip,
                weatherCode: dailyCode,
            }
        }
        console.log('Weather Data:', WeatherData);
        return WeatherData;
    } catch (error) {
        console.error(error);
        throw new Error("WEATHER_API_ERROR");
    }
}