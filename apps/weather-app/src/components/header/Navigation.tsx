import logo from "../../assets/logo/logo.svg"
import { Units } from "./Units.tsx"

export function Navigation() {
  return (
    <nav className="flex justify-between items-center">
      <a href="/">
        <img className="w-37 md:w-45" src={logo} alt="Weather Now" />
      </a>

      <Units /> 
    </nav>
  )
}