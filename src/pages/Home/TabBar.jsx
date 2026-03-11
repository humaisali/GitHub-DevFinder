/**
 * TabBar
 * Navigation tabs sitting above the main content area.
 *
 * Props:
 *   tabs       Array<{ id: string, label: string }>
 *   activeTab  string
 *   onChange   (id: string) => void
 */
export default function TabBar({ tabs, activeTab, onChange }) {
  return (
    <div
      className="flex mb-5 gap-1 overflow-x-auto"
      style={{ borderBottom: '1px solid #30363d' }}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className="px-4 py-2.5 text-xs font-medium whitespace-nowrap transition-colors duration-200"
            style={{
              background:   'transparent',
              border:       'none',
              borderBottom: isActive ? '2px solid #ffa657' : '2px solid transparent',
              color:        isActive ? '#e6edf3' : '#8b949e',
              cursor:       'pointer',
              marginBottom: -1,
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.color = '#c9d1d9'
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.color = '#8b949e'
            }}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
