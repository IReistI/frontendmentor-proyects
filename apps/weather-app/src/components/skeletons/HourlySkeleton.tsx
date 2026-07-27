import iconDropDown from '../../assets/icons/icon-dropdown.svg'

export function HourlySkeleton() {
  return (
    <div className="mt-8 1xl:mt-0 bg-neutral-800 px-4 md:px-6 py-5 md:py-6 rounded-[20px] 1xl:w-[384px]">
      <div className="flex justify-between items-center mb-4">
        <p className="text-preset-5">Hourly Forecast</p>
        <p className="bg-neutral-600 animate-pulse text-preset-7 flex justify-between items-center gap-3 px-4 py-2 rounded-lg">
          <span>-</span>
          <img src={iconDropDown} alt="Dropdown" />
        </p>
      </div>
      <div className="space-y-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="h-15 py-2.5 pl-3 pr-4 bg-neutral-700 rounded-lg border border-neutral-600 animate-pulse"></div>
        ))}
      </div>
    </div>
  )
}
