# GitHub Developer Finder

A professional, analytics-grade GitHub user dashboard built with **React + Vite + Tailwind CSS**.

---

## Features

| Feature | Description |
|---|---|
| **Profile Card** | Avatar, bio, stats, location, website, Twitter, join date |
| **Repository Cards** | Name, description, topics, language, stars, forks, last updated |
| **Filter & Sort** | Filter repos by language · Sort by updated / stars / forks / name |
| **Language Chart** | Donut chart showing language distribution across all repos |
| **Stars Bar Chart** | Top 6 repos ranked by star count |
| **Activity Heatmap** | GitHub-style 52-week contribution calendar |
| **Recent Activity** | Latest 10 repositories sorted by last push |
| **Skeleton Loaders** | Smooth loading experience |
| **Error Handling** | Clear messages for 404, rate-limit, and network errors |
| **Responsive** | Works on desktop, tablet, and mobile |

---

## Tech Stack

- **React 18** — UI library
- **Vite 5** — Dev server & build tool
- **Tailwind CSS 3** — Utility-first styling
- **Recharts** — Language pie chart & stars bar chart
- **GitHub REST API** — No authentication required (60 req/hr)

---

## Project Structure

```
src/
├── components/
│   ├── ContributionGraph/   # Activity heatmap + recent repos list
│   ├── ErrorCard/           # API error display
│   ├── FilterBar/           # Language filter pills + sort selector
│   ├── Header/              # Sticky top nav with search
│   ├── LangBar/             # Proportional language colour bar
│   ├── ProfileCard/         # User avatar, bio, stats, meta
│   ├── RepoCard/            # Single repository card
│   ├── RepoList/            # Repo grid with filtering/sorting
│   ├── SearchBar/           # Controlled search input + button
│   ├── Skeletons/           # Loading skeleton components
│   ├── StatsChart/          # Language donut, stars bar, overview tiles
│   └── WelcomeScreen/       # Initial empty state
├── constants/
│   └── theme.js             # GitHub design tokens & contribution palette
├── hooks/
│   └── useGitHub.js         # Custom hook — all GitHub API logic
├── icons/
│   └── index.jsx            # Centralised SVG icon set
├── pages/
│   └── Home/
│       ├── Home.jsx         # Root page — layout orchestration
│       ├── TabBar.jsx       # Tab navigation component
│       ├── Footer.jsx       # App footer
│       └── useTabs.js       # Tab state hook
├── utils/
│   ├── formatters.js        # Date, number, relative-time formatters
│   ├── langColors.js        # Programming language → hex colour map
│   └── langStats.js        # Language statistics computation
├── App.jsx
├── main.jsx
└── index.css               # Tailwind directives + global styles
```
