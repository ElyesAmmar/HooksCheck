import React from 'react';
import Cards from './MovieCard';
import {useNavigate} from 'react-router-dom';



function MovieList({ movies ,inputS ,searchRating }) {
  const navigate = useNavigate();
  return (
      <div className="movies">
      {movies
      .filter(el=>el.title.toLowerCase().includes(inputS.toLowerCase()) && el.rating >= searchRating)
      .map(movie => (
        <Cards id={movie.id} key={movie.id} value={movie.rating} title={movie.title} description={movie.description} image={movie.posterURL} />
      ))}
      <button onClick={()=>navigate(-1)}>Back to movie list</button>
    </div>
  );
}

export default MovieList;