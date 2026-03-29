import styles from './FooterSection.module.css';

export function FooterSection({ title, links }) {
  return (
    <section className={styles.footerSection}>
      <h3>{title}</h3>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
