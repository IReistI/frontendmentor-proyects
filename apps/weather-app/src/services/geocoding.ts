import type { GeocodingResponseAPI, Suggestions } from "../types";

export const geocoding = async (query: string, cant: number): Promise<Suggestions[]> => {
    try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=${cant}&language=en&format=json`;
        const response = await fetch(url);
        const result: GeocodingResponseAPI = await response.json();
        if (!result.results) return []
        return result.results
    } catch (error) {
        console.log(error);
        return [];
    }
}