import { useEffect, useState, useRef } from "react"
import iconSearch from "../../assets/icons/icon-search.svg"
import iconLoading from "../../assets/icons/icon-loading.svg"
import { geocoding } from "../../services/geocoding.ts"
import { useWeather } from "../../hooks/useWeather.ts"
import type { Suggestions } from "../../types/index.ts"
import { ButtonSearch } from "./ButtonSearch.tsx"
import { usePlacesStore } from "../../store/usePlacesStore.ts"

export function WeatherSearch() {
  const { searchWeather, updating } = useWeather()
  const recents = usePlacesStore((state) => state.recents)
  const addRecent = usePlacesStore((state) => state.addRecent)
  const [term, setTerm] = useState("")
  const [suggestions, setSuggestions] = useState<Suggestions[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [notFound, setNotFound] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (term.length < 2) {
      setSuggestions([])
      setNotFound("")
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    setNotFound("")

    const timer = setTimeout(async () => {
      try {
        const results = await geocoding(term, 5)
        if (results.length === 0) {
          setSuggestions([])
          setNotFound("No locations found")
        } else {
          setSuggestions(results)
          setNotFound("")
        }
      } catch (error) {
        setNotFound("Error fetching locations")
        setSuggestions([])
      } finally {
        setIsSearching(false)
      }
    }, 500);

    return () => clearTimeout(timer)
  }, [term])

  const handleSelect = async (id: number, lat: number, lon: number, country: string, name: string, admin1: string) => {
    await searchWeather(lat, lon, country, name)
    addRecent({ id, latitude: lat, longitude: lon, country, name, admin1})
    restart()
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => setTerm(e.currentTarget.value)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (notFound || term.length < 2) return
    const { latitude, longitude, country, name, admin1, id } = suggestions[0]
    searchWeather(latitude, longitude, country, name)
    addRecent({ latitude, longitude, country, name, admin1, id  })
    restart()
  }

  const restart = () => {
    setTerm("")
    setSuggestions([])
    setIsOpen(false)
    setNotFound("")
    setIsSearching(false)
  }
  return (
    <div ref={searchRef} className="relative mt-12">
      <form onSubmit={handleSubmit} role="search" className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-2xl mx-auto">
        <div className="flex bg-neutral-800 hover:bg-neutral-700 gap-4 rounded-xl py-4 px-6 md:flex-1 items-center focus-within:outline-neutral-0 focus-within:outline-2 focus-within:outline-offset-2">
          <label className="w-6 h-4.5" htmlFor="place-search">
            <img src={iconSearch} alt="Search" />
          </label>
          <input
            className="text-preset-5-medium w-full text-neutral-200 placeholder:text-neutral-200 focus:outline-none"
            id="place-search"
            type="text"
            value={term}
            onChange={(e) => handleSearch(e)}
            onFocus={() => setIsOpen(true)}
            placeholder="Search for a place..."
          />
        </div>

        <button className="bg-secondary-blue-500 hover:bg-secondary-blue-700 rounded-xl py-4 md:px-6 text-preset-5-medium cursor-pointer focus-visible:outline-secondary-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2" type="submit">Search</button>
      </form>

      {
        isOpen && (
          <div className=" bg-neutral-800 p-2 rounded-xl border border-neutral-700 space-y-1 absolute w-full top-17 md:w-135.5 md:left-6 lg:left-38 xl:left-70 1xl:left-68 2xl:left-80 z-10">

            {term.length < 2 ? (
              recents.map(r => (
                <ButtonSearch 
                  key={r.name}
                  disabled={updating}
                  data={{ id: r.id, latitude: r.latitude, longitude: r.longitude, country: r.country, name: r.name, admin1: r.admin1 }}
                  onSelect={handleSelect}
                />
              ))
            ) : isSearching ? (
              <span className="py-2.5 px-2 flex gap-2.5">
                <img src={iconLoading} alt="loading.." />
                <p className="text-preset-7">Search in Progress</p>
              </span>
            ) : notFound ? (
              <p className="text-preset-7 py-2.5 px-2">{notFound}</p>
            ) : (
              suggestions.map((city) => (
                <ButtonSearch
                  key={city.id}
                  disabled={updating}
                  data={{ id: city.id, latitude: city.latitude, longitude: city.longitude, country: city.country, name: city.name, admin1: city.admin1 }}
                  onSelect={handleSelect}
                />
              ))
            )
            }
          </div>
        )
      }
    </div>
  )
}
