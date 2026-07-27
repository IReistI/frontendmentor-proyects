type UserLocation = {
    latitude: number;
    longitude: number;
}

export const getUserLocation = (): Promise<UserLocation> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            () => reject(new Error("LOCATION_PERMISSION_DENIED")),
            {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 300000
            }
        );
    });
}