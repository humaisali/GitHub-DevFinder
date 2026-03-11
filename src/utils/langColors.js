/**
 * GitHub-accurate programming language colors.
 * Source: github-linguist/linguist
 */
const LANGUAGE_COLORS = {
  JavaScript:  '#f1e05a',
  TypeScript:  '#3178c6',
  Python:      '#3572A5',
  Java:        '#b07219',
  Go:          '#00ADD8',
  Rust:        '#dea584',
  CSS:         '#563d7c',
  HTML:        '#e34c26',
  Ruby:        '#701516',
  Shell:       '#89e051',
  C:           '#555555',
  'C++':       '#f34b7d',
  'C#':        '#178600',
  PHP:         '#4F5D95',
  Swift:       '#fa7343',
  Kotlin:      '#A97BFF',
  Dart:        '#00B4AB',
  Vue:         '#41b883',
  Svelte:      '#ff3e00',
  Jupyter:     '#DA5B0B',
  R:           '#198CE7',
  Dockerfile:  '#384d54',
  Elixir:      '#6e4a7e',
  Haskell:     '#5e5086',
  Lua:         '#000080',
  Scala:       '#c22d40',
  Perl:        '#0298c3',
  MATLAB:      '#e16737',
  Assembly:    '#6E4C13',
  Objective_C: '#438eff',
  Nix:         '#7e7eff',
}

/** Returns the hex color for a given language, or a neutral fallback. */
export function getLangColor(language) {
  if (!language) return '#8b949e'
  return LANGUAGE_COLORS[language] ?? '#8b949e'
}

export default LANGUAGE_COLORS
