import { useEffect } from "react"
import { Header } from "./components/header/Header.tsx"
import { Main } from "./components/main/Main.tsx"
import { useWeather } from "./hooks/useWeather.ts"
// import { searchCities } from "./services/geocoding.ts"
// import { useEffect } from "react"

function App() {
  const { initializeWeather } = useWeather()
  useEffect(() => {
    initializeWeather()
  }, [])
  return (
    <div className="container mx-auto px-4 md:px-6 1xl:px-28">
      <Header />
      <Main />
    </div>
  )
}

export default App
