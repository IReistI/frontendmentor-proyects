import iconSearch from "../../assets/icons/icon-search.svg"

export function WeatherSearch() {
  return (
    <div className="relative mt-12">
      <form role="search" className="flex flex-col md:flex-row gap-3">
        <div className="flex bg-neutral-800 gap-4 rounded-xl py-4 px-6">
          <label htmlFor="place-search">
            <img className="inline-block" src={iconSearch} alt="Search" />
          </label>
          <input className="text-preset-5-medium text-neutral-200" id="place-search" type="text" placeholder="Search for a place..." />
        </div>

        <button className="bg-secondary-blue-500 rounded-xl py-4 text-preset-5-medium" type="submit">Search</button>
      </form>
    </div>
  )
}
