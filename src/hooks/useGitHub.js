import { useState, useCallback } from 'react'

const BASE = 'https://api.github.com'

/**
 * Custom hook that encapsulates all GitHub REST API interactions.
 *
 * Returns:
 *   user      – GitHub user object (or null)
 *   repos     – array of repo objects
 *   loading   – boolean
 *   error     – error message string (or null)
 *   search    – function(username: string) => void
 *   reset     – clears all state
 */
export function useGitHub() {
  const [user,    setUser]    = useState(null)
  const [repos,   setRepos]   = useState([])
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState(null)

  const reset = useCallback(() => {
    setUser(null)
    setRepos([])
    setError(null)
    setLoading(false)
  }, [])

  const search = useCallback(async (username) => {
    if (!username?.trim()) return

    setLoading(true)
    setError(null)
    setUser(null)
    setRepos([])

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`${BASE}/users/${username}`),
        fetch(`${BASE}/users/${username}/repos?per_page=100&sort=updated`),
      ])

      // ── Error handling ──────────────────────────────────────
      if (!userRes.ok) {
        if (userRes.status === 404) {
          throw new Error(`User "${username}" was not found on GitHub.`)
        }
        if (userRes.status === 403) {
          throw new Error(
            'GitHub API rate limit exceeded. Please wait a moment and try again.'
          )
        }
        if (userRes.status === 422) {
          throw new Error('Invalid username. Please check and try again.')
        }
        throw new Error(`GitHub API error (status ${userRes.status}).`)
      }

      const [userData, reposData] = await Promise.all([
        userRes.json(),
        reposRes.json(),
      ])

      setUser(userData)
      setRepos(Array.isArray(reposData) ? reposData : [])
    } catch (err) {
      // Distinguish network errors from API errors
      if (err.name === 'TypeError') {
        setError('Network error — please check your internet connection.')
      } else {
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  return { user, repos, loading, error, search, reset }
}
