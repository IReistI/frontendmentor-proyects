import styles from './Hero.module.css'
import illustrationWorking from '../../assets/images/illustration-working.svg'

export function Hero() {
  return (
    <div className={styles.hero}>
      <img className={styles.heroImage} loading='lazy' width="600" height="350" src={illustrationWorking} alt="Person working at desk with computer" />
      <div className={`${styles.heroInfo} container`}>
        <h1 className={styles.heroTitle}>More than just shorter links</h1>
        <p className={styles.heroText}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <button className={styles.heroButton}>Get Started</button>
      </div>
    </div>
  )
}
