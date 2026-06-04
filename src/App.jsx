import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/country/:name"
            element={<div className="route-placeholder">Country detail — coming in Part 3</div>}
          />
          <Route
            path="/favourites"
            element={<div className="route-placeholder">Favourites — coming in Part 5</div>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
