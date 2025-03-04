"use client"

import { useState, useEffect } from "react"
import SearchBar from "../components/SearchBar"
import UserCard from "../components/UserCard"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"
import RecentSearches from "../components/RecentSearches"
import useGitHubUser from "../hooks/useGitHubUser"

const Home = () => {
  const { user, loading, error, fetchUser } = useGitHubUser()
  const [recentSearches, setRecentSearches] = useState([])

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches")
    if (savedSearches) {
      try {
        setRecentSearches(JSON.parse(savedSearches))
      } catch (e) {
        console.error("Error parsing recent searches:", e)
        localStorage.removeItem("recentSearches")
      }
    }
  }, [])

  const handleSearch = async (username) => {
    const userData = await fetchUser(username)

    if (userData) {
      // Add to recent searches if successful
      setRecentSearches((prev) => {
        // Remove if already exists to avoid duplicates
        const filtered = prev.filter((search) => search !== username)
        // Add to beginning of array and limit to 5 items
        const updated = [username, ...filtered].slice(0, 5)
        // Save to localStorage
        localStorage.setItem("recentSearches", JSON.stringify(updated))
        return updated
      })
    }
  }

  const handleSelectRecent = (username) => {
    handleSearch(username)
  }

  const handleClearRecent = () => {
    setRecentSearches([])
    localStorage.removeItem("recentSearches")
  }

  return (
    <main>
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} isLoading={loading} />
        <RecentSearches searches={recentSearches} onSelect={handleSelectRecent} onClear={handleClearRecent} />
      </div>

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && user && <UserCard user={user} />}

      {!loading && !error && !user && (
        <div className="text-center py-10">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github mx-auto text-gray-400 dark:text-gray-600"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </div>
          <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300">
            Search for a GitHub user to see their profile
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Enter a username in the search box above to get started
          </p>
        </div>
      )}
    </main>
  )
}

export default Home

