import styles from './StatisticsCard.module.css'

export function StatisticCard({ icon, title, text }) {
  return (
    <article className={styles.card} data-card={title}>
      <div>
        <img width="40px" height="40px" src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}
