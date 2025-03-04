"use client"

import { useState } from "react"

const useGitHubUser = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUser = async (username) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://api.github.com/users/${username}`)

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`User '${username}' not found`)
        } else {
          throw new Error(`GitHub API error: ${response.status}`)
        }
      }

      const data = await response.json()
      setUser(data)
      return data
    } catch (err) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { user, loading, error, fetchUser }
}

export default useGitHubUser

