import { useState } from 'react'
import styles from './ShortenerCard.module.css'

export function ShortenerCard({ originalUrl, shortUrl }) { 
  const [isCopied, setIsCopied] = useState(false)
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl)
    setIsCopied(true)
  }

  const isDisabled = isCopied ? true : false

  return (
    <article className={styles.shortenerCard}>
      <p className={styles.originalUrl} title={originalUrl}>{originalUrl}</p>

      <div>
        <p className={styles.shortenedLink}>{shortUrl}</p>
        <div> 
          <button onClick={copyToClipboard} disabled={isDisabled} className={isCopied ? styles.copied : ''}>{isCopied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </article>
  )
}
