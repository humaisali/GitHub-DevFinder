<div align="center">

# GitHub DevFinder

### A professional, analytics-grade GitHub user dashboard

[![Live Demo](https://img.shields.io/badge/Live%20Demo-github--devfinder--opal.vercel.app-00D4FF?style=for-the-badge)](https://github-devfinder-opal.vercel.app/)
[![React](https://img.shields.io/badge/React%2018-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite%205-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%203-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## Overview

GitHub DevFinder is a React-based web application that lets you search any GitHub username and instantly view a full developer analytics dashboard — profile stats, repository insights, language breakdown, contribution heatmap, and more.

**Live Demo:** [github-devfinder-opal.vercel.app](https://github-devfinder-opal.vercel.app/)

---

## Features

| Feature | Description |
|---|---|
| **Profile Card** | Avatar, bio, follower stats, location, website, Twitter & join date |
| **Repository Cards** | Name, description, topics, language, stars, forks & last updated |
| **Filter & Sort** | Filter repos by language · Sort by stars / forks / updated / name |
| **Language Chart** | Donut chart showing language distribution across all repos |
| **Stars Bar Chart** | Top 6 repos ranked by star count |
| **Activity Heatmap** | GitHub-style 52-week contribution calendar |
| **Recent Activity** | Latest 10 repositories sorted by last push |
| **Skeleton Loaders** | Smooth loading experience while data fetches |
| **Error Handling** | Clear messages for 404, rate-limit & network errors |
| **Responsive Design** | Works on desktop, tablet, and mobile |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Vite 5 |
| **Styling** | Tailwind CSS 3 |
| **Charts** | Recharts (Donut + Bar Charts) |
| **Data Source** | GitHub REST API (public, no auth needed) |
| **Deployment** | Vercel |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/humaisali/GitHub-DevFinder.git

# Navigate into the project
cd GitHub-DevFinder

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

---

## Project Structure

```
GitHub-DevFinder/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Main app pages
│   └── main.jsx          # Entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## API Rate Limits

This app uses the GitHub REST API without authentication, which allows **60 requests/hour** per IP. For higher limits, you can add a GitHub personal access token.

---

## Deployment

Deployed and hosted on Vercel. To deploy your own instance:

1. Fork this repository
2. Import into [vercel.com](https://vercel.com)
3. Click Deploy

---

## Contributing

Contributions are welcome. Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'feat: add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## Author

**Humais Ali** — Full Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/humaisaliskytechdeveloper)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/humaisali)

---

<div align="center">
If you found this useful, consider giving it a star.
</div>
