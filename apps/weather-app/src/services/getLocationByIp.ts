const URL = 'https://ipapi.co/json/';

interface LocationApiResponse {
    latitude: number;
    longitude: number;
    city: string;
    country_name: string;
}

export const getLocationByIp = async () => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Error al obtener la ubicación por IP: ${response.statusText}`);
        }
        const data: LocationApiResponse = await response.json();
        return {
            latitude: data.latitude,
            longitude: data.longitude,
            city: data.city,
            country: data.country_name,
        }
    } catch (error) {
        console.error('Error al obtener la ubicación por IP:', error);
        return null;
    }  
}