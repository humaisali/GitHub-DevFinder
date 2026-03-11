import { useState, useCallback } from 'react'

/**
 * useTabs
 * Simple hook that manages the active tab state.
 *
 * @param {string} defaultTab  – the initially selected tab id
 */
export function useTabs(defaultTab = 'repos') {
  const [activeTab, setActiveTabState] = useState(defaultTab)

  const setActiveTab = useCallback((id) => {
    setActiveTabState(id)
  }, [])

  return { activeTab, setActiveTab }
}
