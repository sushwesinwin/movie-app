import './css/index.css'
import MovieCard from './components/MovieCard'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}
