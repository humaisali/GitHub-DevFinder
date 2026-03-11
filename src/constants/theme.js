/**
 * GitHub-inspired design tokens
 * Single source of truth for all colors and theme values.
 */
export const COLORS = {
  bg:          '#0d1117',
  surface:     '#161b22',
  surface2:    '#21262d',
  border:      '#30363d',
  borderHover: '#484f58',
  text:        '#e6edf3',
  muted:       '#8b949e',
  subtle:      '#c9d1d9',
  green:       '#238636',
  greenHover:  '#2ea043',
  blue:        '#2f81f7',
  blueLight:   '#79c0ff',
  orange:      '#ffa657',
  yellow:      '#e3b341',
  purple:      '#d2a8ff',
  red:         '#ff7b72',
  redBg:       'rgba(248,81,73,0.1)',
  redBorder:   'rgba(248,81,73,0.35)',
}

/** Contribution calendar cell colours (0 = no activity → 4 = high activity) */
export const CONTRIB_LEVELS = [
  '#161b22',   // 0 – none
  '#0e4429',   // 1 – low
  '#006d32',   // 2 – medium-low
  '#26a641',   // 3 – medium-high
  '#39d353',   // 4 – high
]
