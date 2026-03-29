import { useState } from "react"
import iconUnits from '../../assets/icons/icon-units.svg'
import iconDropdown from '../../assets/icons/icon-dropdown.svg'
import { UnitsDropdown } from './UnitsDropdown.tsx'

export function Units() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative z-10'>
      <button onClick={() => setIsOpen(!isOpen)} className='flex gap-2 px-2.5 py-2 bg-neutral-800 rounded-md md:rounded-lg md:px-4 md:py-3 hover:bg-neutral-700' aria-expanded="false" aria-haspopup="menu">
        <img src={iconUnits} alt="Units" />
        <span className='text-preset-8 md:text-preset-7'>Units</span>
        <img src={iconDropdown} alt="Dropdown" />
      </button>

      {isOpen && <UnitsDropdown />}
    </div>
  )
}
