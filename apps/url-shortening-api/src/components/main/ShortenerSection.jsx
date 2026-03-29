import { ShortenerCard } from './ShortenerCard'
import { useUrlShortener } from '../../hooks/useUrlShortener'
import styles from './ShortenerSection.module.css'

export function ShortenerSection() {
  const {
    url,
    error,
    links,
    loading,
    isDisabled,
    handleSubmit,
    handleChange
  } = useUrlShortener()

  return (
    <section className="container">
      <form className={styles.form} role="search" onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="url"
            value={url}
            onChange={handleChange}
            placeholder="Shorten a link here..."
            className={error ? styles.inputError : ""}
            aria-invalid={!!error}
            aria-describedby={error ? "url-error" : undefined}
            id='url-input'
            required
          />

          {error && (
            <p
              id="url-error"
              role="alert"
              className={styles.isError}
            >
              {error}
            </p>
          )}
        </div>
        <button type="submit" disabled={isDisabled}>{loading ? "Loading..." : "Shorten It!"}</button>
      </form>

      <div className={styles.shortenedContainer}>
        {links.map((link) => (
          <ShortenerCard
            key={link.short}
            originalUrl={link.original}
            shortUrl={link.short}
          />
        ))}
      </div>
    </section>
  )
}
