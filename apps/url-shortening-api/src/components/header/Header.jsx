import styles from './Header.module.css'
import { Navigation } from './Navigation.jsx'
import { Hero } from './Hero.jsx'


export function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <Hero />
    </header>
  )
}
