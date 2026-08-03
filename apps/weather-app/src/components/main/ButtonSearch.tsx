type ButtonSearchProps = {
  disabled: boolean
  data: {
    id: number
    latitude: number
    longitude: number
    country: string
    name: string
    admin1: string
  }
  onSelect: (id:number, lat: number, lon: number, country: string, name: string, admin1: string) => void
}

export function ButtonSearch({disabled, data, onSelect} : ButtonSearchProps)  {
  return (
    <button
      onClick={() => onSelect(data.id, data.latitude, data.longitude, data.country, data.name, data.admin1)}
      disabled={disabled}
      className="px-2 py-2.5 text-preset-7  rounded-lg border border-neutral-800 hover:bg-neutral-700 hover:border-neutral-600 block"
    >
      {data.name}, {data.admin1}, {data.country}
    </button>
  )
}
