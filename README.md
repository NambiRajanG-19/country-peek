# CountryPeek

A React application for searching and exploring country data, powered by the [RestCountries API](https://restcountries.com/).

Search countries by name, filter by region, sort results, view detailed profiles, save favourites, and switch between light and dark themes — all in the browser.

## Live Demo

**https://nambirajang-19.github.io/country-peek/**

## Features

- Live country search with debounced API requests
- Filter by region and sort by name or population
- Full country detail pages (languages, currencies, borders)
- Dark and light theme toggle (persists across pages)
- Save countries to a Favourites list (localStorage)
- Responsive layout for mobile screens
- Keyboard-accessible controls with ARIA labels

## Tech Stack

- React 19
- Vite
- React Router v7
- React Context API (`ThemeContext`, `FavouritesContext`)
- `useReducer` + `localStorage`
- CSS Custom Properties
- [RestCountries API](https://restcountries.com/)

## Run Locally

```bash
git clone https://github.com/NambiRajanG-19/country-peek.git
cd country-peek
npm install
npm run dev
```

Open [http://localhost:5173/country-peek/](http://localhost:5173/country-peek/) in your browser.

## Build & Deploy (GitHub Pages)

```bash
npm run build
npm run deploy
```

Repository Settings → **Pages** → Source: branch `gh-pages`, folder `/ (root)`.

## Branch Workflow

| Part | Branch |
|------|--------|
| 1 | `part-1/project-setup` |
| 2 | `part-2/api-and-cards` |
| 3 | `part-3/country-detail` |
| 4 | `part-4/filter-sort-theme` |
| 5 | `part-5/favourites` |
| 6 | `part-6/polish-deploy` |

Work on the part branch, open a PR into `main`, and leave the PR open for review.

## Project Structure

```
src/
├── components/   # Header, SearchBar, CountryCard, FilterBar
├── context/      # ThemeContext, FavouritesContext
├── hooks/        # useCountry
├── pages/        # Home, CountryPage, Favourites, NotFound
├── styles/       # index.css (tokens), App.css (components)
└── App.jsx       # Router setup
```

Built incrementally across six parts as part of the Kalvium React curriculum.
