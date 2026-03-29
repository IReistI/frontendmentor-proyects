import iconCheckmark from "../../assets/icons/icon-checkmark.svg";

type Option = {
  label: string;
  value: string;
};

type Group = {
  label: string;
  options: Option[];
};

const groups: Group[] = [
  {
    label: "Temperature",
    options: [
      { label: "Celsius (°C)", value: "celsius" },
      { label: "Fahrenheit (°F)", value: "fahrenheit" },
    ],
  },
  {
    label: "Wind Speed",
    options: [
      { label: "km/h", value: "kmh" },
      { label: "mph", value: "mph" },
    ],
  },
  {
    label: "Precipitation",
    options: [
      { label: "Millimeters (mm)", value: "mm" },
      { label: "Inches (in)", value: "in" },
    ],
  },
];

export function UnitsDropdown() {
  return (
    <div className='absolute bg-neutral-800 w-53 right-0 mt-3 px-2 py-1.5 rounded-xl flex flex-col gap-1' role='menu'>
      <button className="px-2 py-2.5 hover:bg-neutral-700 rounded-lg w-full text-preset-7 text-left">Switch to Imperial</button>
      {groups.map((group) => (
        <div key={group.label}>
          <h3 className='text-preset-8 text-neutral-300 px-2 pt-1.5'>{group.label}</h3>
          {group.options.map((option) => (
            <button className='px-2 py-2.5 text-preset-7 flex justify-between w-full hover:bg-neutral-700 rounded-lg' role='menuitem' key={option.value}>
              <span>{option.label}</span>
              <img src={iconCheckmark} alt="Checkmarks" />
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}
