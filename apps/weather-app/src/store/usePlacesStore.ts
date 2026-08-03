import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Place {
  id: number
  latitude: number
  longitude: number
  country: string
  name: string
  admin1: string
}

interface PlacesState {
  recents: Place[]
  addRecent: (place: Place) => void
}


export const usePlacesStore = create<PlacesState>()(
  persist(
    (set) => ({
      recents: [],

      addRecent: (newPlace: Place) => set((state) => {

        const filteredRecents = state.recents.filter(
          (place) => place.latitude !== newPlace.latitude || place.longitude !== newPlace.longitude
        );

        const updatedRecents = [newPlace, ...filteredRecents];

        return {
          recents: updatedRecents.slice(0, 4)
        };
      }),
    }),
    {
      name: 'user-places-storage',
    }
  )
);