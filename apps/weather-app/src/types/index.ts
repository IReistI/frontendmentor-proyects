// interface WeatherApiResponse {
//     latitude: number;
//     longitude: number;
//     elevation: number;
//     generationtime_ms: number;
//     utc_offset_seconds: number;
//     timezone: string;
//     timezone_abbreviation: string;
//     hourly: {
//         time: string[];
//         temperature_2m: number[];
//     }
//     hourly_units: {
//         temperature_2m: string;
//     }
// }

interface GeocodingResult {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    feature_code: string;
    country_code: string;
    admin1_id: number;
    admin2_id?: number;
    admin3_id?: number;
    admin4_id?: number;
    timezone: string;
    population: number;
    postcodes: string[];
    country_id: number;
    country: string;
    admin1: string;
    admin2?: string;
    admin3?: string,
    admin4?: string;
}

export interface GeocodingResponseAPI {
    results: GeocodingResult[];
}

export type Suggestions = Pick<GeocodingResult, 'id' | 'name' | 'latitude' | 'longitude' | 'country' | 'admin1'>;
