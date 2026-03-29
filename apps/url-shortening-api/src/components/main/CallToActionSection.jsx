import styles from './CallToActionSection.module.css'

export function CallToActionSection() {
  return (
    <section>
      <div className="container">
        <h2 className={styles.ctaTitle}>Boost your links today</h2>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </section>
  )
}
