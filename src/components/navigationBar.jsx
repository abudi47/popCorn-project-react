import React, { useState } from 'react'

export const NavigationBar = ({tempMovieData,tempWatchedData }) => {
  
  return (
    <nav className="nav-bar">
        <Logo />
        
        <Search />

        <NumResult tempMovieData={tempMovieData}/>
        
       
      </nav>
    
  )
}


function Logo () {
  return (
    <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>

  )


}

function NumResult ({tempMovieData}) {
  const [movies, setMovies] = useState(tempMovieData);


  return (
    <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
  )
}
function Search () {
  const [query , setQuery] = useState("")

  return (
    <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

  )
} 