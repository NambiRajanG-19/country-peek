import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import CountryCard from '../components/CountryCard'

function Favourites() {
  const { favourites } = useFavourites()

  if (favourites.length === 0) {
    return (
      <div className="favourites-empty">
        <h2>No favourites yet</h2>
        <p>You have not saved any countries yet.</p>
        <Link to="/">Explore countries</Link>
      </div>
    )
  }

  return (
    <div className="favourites-page">
      <h2 className="favourites-page__title">Your favourite countries</h2>
      <div className="cards-grid">
        {favourites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )
}

export default Favourites
