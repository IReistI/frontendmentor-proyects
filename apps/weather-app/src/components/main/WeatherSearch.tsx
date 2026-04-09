import iconSearch from "../../assets/icons/icon-search.svg"

export function WeatherSearch() {
  return (
    <div className="relative mt-12">
      <form role="search" className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-2xl mx-auto">
        <div className="flex bg-neutral-800 gap-4 rounded-xl py-4 px-6 md:flex-1 items-center">
          <label className="w-6 h-4.5" htmlFor="place-search">
            <img src={iconSearch} alt="Search" />
          </label>
          <input className="text-preset-5-medium w-full text-neutral-200 placeholder:text-neutral-200" id="place-search" type="text" placeholder="Search for a place..." />
        </div>

        <button className="bg-secondary-blue-500 rounded-xl py-4 md:px-6 text-preset-5-medium" type="submit">Search</button>
      </form>


      {/* <div className=" bg-neutral-800 p-2 rounded-xl border border-neutral-700 space-y-1 absolute w-full top-17 md:w-135.5 md:left-6 lg:left-38 xl:left-70 1xl:left-68 2xl:left-80">
        <p className="px-2 py-2.5 text-preset-7  rounded-lg border border-neutral-800 hover:bg-neutral-700 hover:border-neutral-600">City name</p>
        <p className="px-2 py-2.5 text-preset-7 rounded-lg border border-neutral-800 hover:bg-neutral-700 hover:border-neutral-600">City name</p>
        <p className="px-2 py-2.5 text-preset-7 rounded-lg border border-neutral-800 hover:bg-neutral-700 hover:border-neutral-600">City name</p>
        <p className="px-2 py-2.5 text-preset-7 rounded-lg border border-neutral-800 hover:bg-neutral-700 hover:border-neutral-600">City name</p>
      </div> */}
    </div>
  )
}
