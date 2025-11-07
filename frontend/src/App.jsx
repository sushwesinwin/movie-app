import './App.css'
import MovieCard from './components/MovieCard'

export default function App() {
  return (
    <>
      <MovieCard movie={{title: "Breaking Bad", release_date: "2008" }}/>
    </>
  )
}
