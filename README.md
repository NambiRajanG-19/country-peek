# CountryPeek

A React application for searching countries, browsing summaries, and exploring detailed country data. Built incrementally across six parts as part of the Kalvium React curriculum.

## Part 1 — Project setup and app shell

- Vite + React (JavaScript)
- React Router with Home, placeholder routes, and 404 page
- Header navigation, controlled search input on Home
- Folder structure prepared for later parts

## Part 2 — API integration and country cards

- RestCountries API with debounced search (400ms)
- Loading and error states on Home
- Responsive `CountryCard` grid (flag, name, population, region, capital)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tech stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [RestCountries API](https://restcountries.com/) (from Part 2 onward)

## Branch workflow

| Part | Branch |
|------|--------|
| 1 | `part-1/project-setup` |
| 2 | `part-2/api-and-cards` |
| 3 | `part-3/country-detail` |
| 4 | `part-4/filter-sort-theme` |
| 5 | `part-5/favourites` |
| 6 | `part-6/polish-deploy` |

Work on the part branch, open a PR into `main`, and leave the PR open for review.
