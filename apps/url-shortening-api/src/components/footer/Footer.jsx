import styles from './Footer.module.css'
import { FooterSection } from './FooterSection.jsx'
import { FooterSocials } from './FooterSocials.jsx'
import logo from '../../assets/images/logo.svg'

const footerData = [ 
  { 
    title: 'Features', 
    links: [ 
      { label: 'Link Shortening', url: '#' }, 
      { label: 'Branded Links', url: '#' }, 
      { label: 'Analytics', url: '#' }, 
    ] 
  }, 
  { 
    title: 'Resources', 
    links: [ 
      { label: 'Blog', url: '#' }, 
      { label: 'Developers', url: '#' }, 
      { label: 'Support', url: '#' }, 
    ] 
  }, 
  { 
    title: 'Company', 
    links: [ 
      { label: 'About', url: '#' }, 
      { label: 'Our Team', url: '#' }, 
      { label: 'Careers', url: '#' }, 
      { label: 'Contact', url: '#' }, 
    ] 
  } 
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <h2 className={styles.logo}>
          <a href="/" aria-label="Ir al inicio">
            <img width="110" height="33" src={logo} alt="Shortly" />
          </a>
        </h2>
        {footerData.map((section, index) => (
          <FooterSection key={index} {...section} />
        ))}
        <FooterSocials />
      </div>
      <div className={styles.attribution}>
        <p>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>
          {' • '}
          Coded by <a href="https://github.com/IReistI" target="_blank" rel="noopener noreferrer">Braian Nuñez</a>
        </p>
      </div>
    </footer>
  )
}
