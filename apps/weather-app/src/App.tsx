import { Header } from "./components/header/Header.tsx"
import { Main } from "./components/main/Main.tsx"
// import { searchCities } from "./services/geocoding.ts"
// import { useEffect } from "react"

function App() {
  // useEffect(() => {
  //   // getWeatherByCoords(40.7128, -74.0060);
  //   searchCities("Rio Grande", 5)
  // }, [])
  return (
    <div className="container mx-auto px-4 md:px-6 1xl:px-28">
      <Header />
      <Main />
    </div>
  )
}

export default App
