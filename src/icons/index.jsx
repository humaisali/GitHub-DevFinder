/**
 * Centralised SVG icon components.
 * All icons are 16×16 by default but accept a `size` prop.
 */

const Base = ({ paths, size = 16, fill = 'none', stroke = 'currentColor', strokeWidth = 1.5, viewBox = '0 0 24 24', ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
    {...rest}
  >
    {paths.map((d, i) => <path key={i} d={d} />)}
  </svg>
)

export const SearchIcon     = ({ size }) => <Base size={size} paths={['M21 21l-4.35-4.35', 'M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z']} />
export const UserIcon       = ({ size }) => <Base size={size} paths={['M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z']} />
export const StarIcon       = ({ size }) => <Base size={size} paths={['M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z']} />
export const ForkIcon       = ({ size }) => <Base size={size} paths={['M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm12 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM6 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-6V9m12 3V9m-6-3v3M6 15l6-3 6 3']} />
export const FollowerIcon   = ({ size }) => <Base size={size} paths={['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75']} />
export const LocationIcon   = ({ size }) => <Base size={size} paths={['M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z', 'M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z']} />
export const LinkIcon       = ({ size }) => <Base size={size} paths={['M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71', 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71']} />
export const OrgIcon        = ({ size }) => <Base size={size} paths={['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M9 22V12h6v10']} />
export const TwitterIcon    = ({ size }) => <Base size={size} paths={['M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z']} />
export const ExternalIcon   = ({ size }) => <Base size={size} paths={['M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', 'M15 3h6v6', 'M10 14L21 3']} />
export const ClockIcon      = ({ size }) => <Base size={size} paths={['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M12 6v6l4 2']} />
export const CodeIcon       = ({ size }) => <Base size={size} paths={['M16 18l6-6-6-6', 'M8 6l-6 6 6 6']} />
export const RepoIcon       = ({ size }) => <Base size={size} paths={['M3 3h18v18H3z', 'M9 3v18', 'M3 9h6', 'M3 15h6']} />
export const WatcherIcon    = ({ size }) => <Base size={size} paths={['M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z']} />
export const TagIcon        = ({ size }) => <Base size={size} paths={['M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z', 'M7 7h.01']} />
export const GitBranchIcon  = ({ size }) => <Base size={size} paths={['M6 3v12', 'M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M18 9a9 9 0 0 1-9 9']} />
export const SortIcon       = ({ size }) => <Base size={size} paths={['M3 6h18', 'M7 12h10', 'M10 18h4']} />
export const FilterIcon     = ({ size }) => <Base size={size} paths={['M22 3H2l8 9.46V19l4 2v-8.54L22 3z']} />
export const ActivityIcon   = ({ size }) => <Base size={size} paths={['M22 12h-4l-3 9L9 3l-3 9H2']} />
export const ChartIcon      = ({ size }) => <Base size={size} paths={['M18 20V10', 'M12 20V4', 'M6 20v-6']} />

/** GitHub Octocat SVG logo */
export const GitHubLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 98 96" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69
         2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127
         -13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17
         -4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052
         4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6
         -10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2
         -.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052
         a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63
         9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038
         3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283
         1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526
         0 1.304.89 2.853 3.316 2.364
         19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
    />
  </svg>
)

/** Animated spinner */
export const SpinnerIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    className="animate-spin-fast"
    style={{ flexShrink: 0 }}
  >
    <path d="M12 2a10 10 0 0 1 10 10" opacity="0.25" />
    <path d="M12 2a10 10 0 0 1 10 10" />
  </svg>
)
