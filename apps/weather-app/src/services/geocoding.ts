export interface CitySuggestion {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    admin1?: string;
}

export const searchCities = async (query: string, cant: number): Promise<CitySuggestion[]> => {
    try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=${cant}&language=en&format=json`;
        const response = await fetch(url);
        const result = await response.json();
        return result.results || []
    } catch (error) {
        console.log(error);
        return [];
    }
}