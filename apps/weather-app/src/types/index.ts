interface WeatherApiResponse {
    latitude: number;
    longitude: number;
    elevation: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    hourly: {
        time: string[];
        temperature_2m: number[];
    }
    hourly_units: {
        temperature_2m: string;
    }
}

export type { WeatherApiResponse };
