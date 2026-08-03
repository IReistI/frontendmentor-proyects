import { useLocationStore } from "../store/locationStore.ts";
import { useWeatherStore } from "../store/weatherStore.ts";
import { getUserLocation } from "../services/getLocation.ts";
import { getLocationByIp } from "../services/getLocationByIp.ts";
import { getWeatherByCoords } from "../services/weather.ts";

export const useWeather = () => {
  const initialLocation = useLocationStore((state) => state.initialLocation);
  const loading = useWeatherStore((state) => state.loading);
  const updating = useWeatherStore((state) => state.updating);
  const error = useWeatherStore((state) => state.error);
  const setLocation = useLocationStore((state) => state.setLocation);
  const setLoading = useWeatherStore((state) => state.setLoading);
  const setUpdating = useWeatherStore((state) => state.setUpdating);
  const setError = useWeatherStore((state) => state.setError);
  const setWeather = useWeatherStore((state) => state.setWeather);

  const initializeWeather = async () => {
    setError(null);
    if (initialLocation.latitude && initialLocation.longitude) {
      console.log("Initial location from store:", initialLocation);
      try {
        const weatherData = await getWeatherByCoords(initialLocation.latitude, initialLocation.longitude);
        // console.log("Weather data by initial location:", weatherData);
        setWeather(weatherData);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch weather data for initial location.");
      } finally {
        setLoading(false);
      }
    } else {
      try {
        if (!navigator.geolocation) throw new Error("Geolocation is not supported by this browser.");

        const location = await getUserLocation();
        const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.latitude}&longitude=${location.longitude}&localityLanguage=en`);
        const locationData = await res.json();

        const weatherData = await getWeatherByCoords(location.latitude, location.longitude);
        setLocation(location.latitude, location.longitude, locationData.countryName, locationData.locality);
        setWeather(weatherData);
      } catch (error) {
        console.error(error);
        try {
          const locationByIp = await getLocationByIp();
          if (locationByIp) {
            const weatherData = await getWeatherByCoords(locationByIp.latitude, locationByIp.longitude);
            setLocation(locationByIp.latitude, locationByIp.longitude, locationByIp.country, locationByIp.city);
            // console.log("Weather data by IP location:", weatherData);
            setWeather(weatherData);
          }
        } catch (error) {
          console.error(error);
          setError("Failed to fetch weather data for IP location.");
        }
      } finally {
        setLoading(false);
      }
    }
  }

  const searchWeather = async (lat: number, lon: number, country: string, name: string) => {
    setUpdating(true);
    setError(null);

    try {
      const weatherData = await getWeatherByCoords(lat, lon);
      setLocation(lat, lon, country, name);
      setWeather(weatherData);
    } catch (error) {
      console.error(error);
      setError("No locations found");
    } finally {
      setUpdating(false);
    }
  }
  return {
    loading,
    updating,
    error,
    initializeWeather,
    searchWeather
  }
}

