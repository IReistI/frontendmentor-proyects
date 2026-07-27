const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

type HourlyDropdownProps = {
  actualDay: string
}

export function HourlyDropdown({actualDay} : HourlyDropdownProps) {
  const index = DAYS.findIndex(day => day === actualDay)
  const nextDays = DAYS.slice(index)
  const daysBefore = DAYS.slice(0, index)

  const newDays = [...nextDays, ...daysBefore]

  return (
    <div className='absolute bg-neutral-800 w-53 right-0 mt-3 p-2 rounded-xl border border-neutral-600 flex flex-col gap-1' role='menu'>
      {
        newDays.map((day) => (
          <button key={day} className="px-2 w-full text-left py-2.5 rounded-lg text-preset-7 hover:bg-neutral-600 cursor-pointer">{day}</button>
        ))
      }
    </div>
  )
}
