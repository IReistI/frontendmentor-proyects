import brandIcon from "../../assets/icons/icon-brand-recognition.svg"
import recordsIcon from "../../assets/icons/icon-detailed-records.svg"
import customizableIcon from "../../assets/icons/icon-fully-customizable.svg"
import { StatisticCard } from "./StatisticCard"
import styles from "./StatisticsSection.module.css"

const statsData = [
  {
    icon: brandIcon,
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: recordsIcon,
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: customizableIcon,
    title: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
]

export function StatisticsSection() {
  return (
    <section className="container">
      <h2 className={styles.title}>Advanced Statistics</h2>
      <p className={styles.subtitle}>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className={styles.statsContainer}>
        {statsData.map((item) => (
          <StatisticCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </section>
  )
}
