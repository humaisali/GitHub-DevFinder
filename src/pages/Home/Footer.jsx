/**
 * Footer
 * Simple app footer with GitHub API attribution.
 */
export default function Footer() {
  return (
    <footer
      className="px-4 py-5 mt-10 text-xs text-center"
      style={{
        borderTop: '1px solid #30363d',
        color:     '#8b949e',
      }}
    >
      Powered by the{' '}
      <a
        href="https://docs.github.com/en/rest"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-150 hover:underline"
        style={{ color: '#2f81f7' }}
      >
        GitHub REST API
      </a>
    </footer>
  )
}
