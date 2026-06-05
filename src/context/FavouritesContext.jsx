import { createContext, useReducer, useEffect, useContext } from 'react'

function favouritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVOURITE': {
      const country = action.payload
      if (state.some((c) => c.cca3 === country.cca3)) {
        return state
      }
      const { name, flags, population, region, capital, cca3 } = country
      return [
        ...state,
        { name, flags, population, region, capital, cca3 },
      ]
    }
    case 'REMOVE_FAVOURITE':
      return state.filter((c) => c.cca3 !== action.payload)
    default:
      return state
  }
}

const FavouritesContext = createContext()

export function FavouritesProvider({ children }) {
  const saved = JSON.parse(localStorage.getItem('favourites') || '[]')
  const [favourites, dispatch] = useReducer(favouritesReducer, saved)

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  return (
    <FavouritesContext.Provider value={{ favourites, dispatch }}>
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  return useContext(FavouritesContext)
}
