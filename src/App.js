import React, {useState} from 'react';
import './App.css';
import { moviesList } from './movieData';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList';
import Navbar1 from './Components/Navbar';
import OpenModal from './Components/Modal2';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Trailer from './Components/Trailer';





function App() {
  const [searching,setSearching] = useState('');
  const [searchRating,setSearchRating] = useState(0);
  console.log(searchRating)

  const [movies,setMovies] = useState(moviesList);
   
  function AddMovie(movie) {
   return setMovies ([...movies,movie])
  }
   
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar1 setSearching={setSearching} setSearchRating={setSearchRating} />
      <Routes>
      <Route path='/'element={<OpenModal add={AddMovie} />}/>
      <Route path='/movies'element={<MovieList searchRating={searchRating} movies={movies} inputS={searching} />}/>
      <Route path='/trailer/:id' element={<Trailer movies={movies}/>}/>

      </Routes>
      </BrowserRouter>

    
          </div>
  );
}

export default App;
