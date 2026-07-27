import { useEffect, useState } from "react"
import iconSearch from "../../assets/icons/icon-search.svg"
import { searchCities, type CitySuggestion } from "../../services/geocoding.ts"
import { useWeather } from "../../hooks/useWeather"

export function WeatherSearch() {
  const { searchWeather } = useWeather()
  const [term, setTerm] = useState("")
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const debounce = setTimeout(async () => {
      if (term.length >= 2) {
        console.log("muestra resultados e elimina recientes y muestra modal")
        const results = await searchCities(term, 5)
        setSuggestions(results)
      } else {
        console.log("no elimina el modal y mantien el arreglo vacio")
      }
    }, 500)
    return () => clearTimeout(debounce)
  }, [term])

  const handleSelect = (lat: number, lon: number) => {
    searchWeather(lat, lon)
  }

  const handleSearch = (e: React.InputEvent<HTMLInputElement>) => setTerm(e.currentTarget.value)
  return (
    <div className="relative mt-12">
      <form role="search" className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-2xl mx-auto">
        <div className="flex bg-neutral-800 hover:bg-neutral-700 gap-4 rounded-xl py-4 px-6 md:flex-1 items-center focus-within:outline-neutral-0 focus-within:outline-2 focus-within:outline-offset-2">
          <label className="w-6 h-4.5" htmlFor="place-search">
            <img src={iconSearch} alt="Search" />
          </label>
          <input
            className="text-preset-5-medium w-full text-neutral-200 placeholder:text-neutral-200 focus:outline-none"
            id="place-search"
            type="text"
            value={term}
            onInput={(e) => handleSearch(e)}
            onFocus={() => setOpen(!open)}
            placeholder="Search for a place..."
          />
        </div>

        <button className="bg-secondary-blue-500 hover:bg-secondary-blue-700 rounded-xl py-4 md:px-6 text-preset-5-medium cursor-pointer focus-visible:outline-secondary-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2" type="submit">Search</button>
      </form>


      {
        open && (
          <div className=" bg-neutral-800 p-2 rounded-xl border border-neutral-700 space-y-1 absolute w-full top-17 md:w-135.5 md:left-6 lg:left-38 xl:left-70 1xl:left-68 2xl:left-80">
            
            {
              suggestions.length > 0 ? (
                suggestions.map((city) => (
                  <button onClick={() => handleSelect(city.latitude, city.longitude)} key={city.id} className="px-2 py-2.5 text-preset-7  rounded-lg border border-neutral-800 hover:bg-neutral-700 hover:border-neutral-600">{city.name}</button>
                ))
              ) : (
                <button className="px-2 py-2.5 text-preset-7  rounded-lg border border-neutral-800 hover:bg-neutral-700 hover:border-neutral-600">city name</button>
              )
            }
          </div>
        )
      }

    </div>
  )
}
