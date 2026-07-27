interface UIStore {
  theme: "light" | "dark"
  units: "celsius" | "fahrenheit"

// favorites: FavoriteLocation[]

  setTheme: () => void
  setUnits: () => void
  addFavorite: () => void
}