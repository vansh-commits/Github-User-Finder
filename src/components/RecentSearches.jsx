const RecentSearches = ({ searches, onSelect, onClear }) => {
  if (!searches.length) return null

  return (
    <div className="mt-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent Searches</h3>
        <button onClick={onClear} className="text-xs text-red-600 dark:text-red-400 hover:underline">
          Clear All
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {searches.map((search, index) => (
          <button
            key={index}
            onClick={() => onSelect(search)}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  )
}

export default RecentSearches

