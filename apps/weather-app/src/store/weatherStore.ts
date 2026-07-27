import { create } from "zustand";

interface CurrentWeather {
  time: Date;
  temperature: number;
  apparentTemperature: number;
  relativeHumidity: number;
  windSpeed: number;
  precipitation: number;
  is_day: number;
  weatherCode: number;
}

interface HourlyWeather {
  time: Date[];
  temperature: Float32Array;
  is_day: Float32Array;
  weatherCode: Float32Array;
}

interface DailyWeather {
  time: Date[];
  temperatureMax: Float32Array;
  temperatureMin: Float32Array;
  apparentTemperature: Float32Array;
  windSpeed: Float32Array;
  precipitation: Float32Array;
  weatherCode: Float32Array;
}

interface WeatherData {
  current: CurrentWeather;
  daily: DailyWeather;
  hourly: HourlyWeather;
}

interface WeatherState {
  weather: WeatherData | null;

  loading: boolean;
  updating: boolean;
  error: string | null;

  selectedDate: Date;

  setWeather: (weather: WeatherData) => void;
  setLoading: (loading: boolean) => void;
  setUpdating: (updating: boolean) => void;
  setError: (error: string | null) => void;
  setSelectedDate: (date: Date) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: null,
  loading: true,
  updating: false,
  error: null,
  selectedDate: new Date(),

  setWeather: (weather) => set({ weather }),
  setLoading: (loading) => set({ loading }),
  setUpdating: (updating) => set({ updating }),
  setError: (error) => set({ error }),
  setSelectedDate: (date) => set({ selectedDate: date }),
}));