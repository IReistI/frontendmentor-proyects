import IconSunny from "../../assets/icons/icon-sunny.webp"
import BgImage from "../../assets/images/bg-today-small.svg"

export function CurrentWeatherCard() {
  return (
    <div className="px-6 py-12 bg-no-repeat bg-cover bg-center space-y-4 rounded-[20px] flex flex-col min-h-64 max-w-2xl mx-auto justify-center" style={{ backgroundImage: `url(${BgImage})`}}>
      <div className="space-y-3 text-center">
        <h2 className="text-preset-4">Berlin, Germany</h2>
        <p className="text-preset-6">Tuesday, Aug 5, 2026</p>
      </div>
      <div className="flex items-center justify-between">
        <img className="size-30" src={IconSunny} alt="Sunny" />
        <p className="text-preset-1">68°</p>
      </div>
    </div>
  )
}
