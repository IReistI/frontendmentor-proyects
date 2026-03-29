import facebookIcon from '../../assets//icons/icon-facebook.svg'
import twitterIcon from '../../assets//icons/icon-twitter.svg'
import pinterestIcon from '../../assets//icons/icon-pinterest.svg'
import instagramIcon from '../../assets//icons/icon-instagram.svg'
import styles from './FooterSocials.module.css'

const socials = [
  { name: 'Facebook', url: 'https://www.facebook.com', icon: facebookIcon }, 
  { name: 'Twitter', url: 'https://x.com', icon: twitterIcon }, 
  { name: 'Pinterest', url: 'https://www.pinterest.com', icon: pinterestIcon }, 
  { name: 'Instagram', url: 'https://www.instagram.com', icon: instagramIcon },
]

export function FooterSocials() {
  return (
    <nav className={styles.socials} aria-label="Redes sociales">
      {socials.map(({ name, url, icon }) => (
        <a
          key={name}
          href={url}
          aria-label={name}
          title={name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={icon} alt="" aria-hidden="true" />
        </a>
      ))}
    </nav>
  )
}
