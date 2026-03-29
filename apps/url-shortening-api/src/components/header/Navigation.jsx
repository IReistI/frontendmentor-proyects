import { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import styles from './Navigation.module.css'

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuClassName = menuOpen ? `${styles.menu} ${styles.isMenuOpen}` : styles.menu

  return (
    <div className={`${styles.navigation} container`}>
      <a href="/">
        <img src={logo} alt="Shortly" />
      </a>

      <div>
        <button className={styles.btnHamburger} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {
            menuOpen
              ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
              : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" />
              </svg>
          }
        </button>

        <nav className={menuClassName}>
          <ul>
            <li><a className={styles.link} href="#">Features</a></li>
            <li><a className={styles.link} href="#">Pricing</a></li>
            <li><a className={styles.link} href="#">Resources</a></li>
            <hr />
            <li className={styles.login}><a className={styles.link} href="#">Login</a></li>
            <li><a className={`${styles.link} ${styles.signUp}`} href="#">Sign Up</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
