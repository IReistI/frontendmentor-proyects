import { useState } from 'react'

const STORAGE_KEY = 'shortenedLinks'

const getLocalStorageLinks = () => {
  try {
    const storedLinks = localStorage.getItem(STORAGE_KEY)
    return storedLinks ? JSON.parse(storedLinks) : []
  } catch (error) {
    console.error('Error reading from localStorage:', error)
    return []
  }
}

const saveToLocalStorage = (links) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links))
    return true
  } catch (error) {
    console.error('Error saving to localStorage:', error)
    return false
  }
}

export function useUrlShortener() {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const [links, setLinks] = useState(getLocalStorageLinks())
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!url || url.trim() === '') {
      setError('Please add a link')
      return
    }

    try {
      new URL(url)
    } catch {
      return setError('Please enter a valid URL')
    }

    if (links.some(link => link.original === url)) {
      setError('This URL has already been shortened.')
      return
    }
    setLoading(true)

    try {
      const response = await fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`)

      if (!response.ok) {
        return setError('Something went wrong. Please try again later.')
      }

      const data = await response.json()

      if (data.errorcode) {
        return setError(data.errormessage || 'Failed to shorten URL')
      }

      const newLinks = [...links, { original: url, short: data.shorturl }]
      setLinks(newLinks)
      saveToLocalStorage(newLinks)
      setUrl('')
    } catch (error) {
      console.error('Error:', error)
      setError('Network error. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (event) => {
    setUrl(event.target.value)
    if (error) setError('')
  }

  const isDisabled = loading || error

  return {
    url,
    error,
    links,
    loading,
    isDisabled,
    handleSubmit,
    handleChange
  }
}
