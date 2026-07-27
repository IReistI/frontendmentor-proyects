import { create } from 'zustand';
import { persist  } from 'zustand/middleware';

interface LocationState {
  initialLocation: {
    latitude: number | null;
    longitude: number | null;
    country?: string | null;
    place?: string | null;
  }
  setLocation: (latitude: number, longitude: number, country?: string | null, place?: string | null) => void;
}

export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      initialLocation: {
        latitude: null,
        longitude: null,
        country: null,  
        place: null
      },
      setLocation: (latitude, longitude, country, place) => set({ initialLocation: { latitude, longitude, country, place } }),
    }),
    {
      name: 'location-storage',
    }
  )
)