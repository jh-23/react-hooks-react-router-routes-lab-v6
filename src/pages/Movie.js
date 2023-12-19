import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {

  const [movieInfo, setMovieInfo] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((r) => r.json())
      .then(data => setMovieInfo(data))
      .catch(error => console.error(error))
  }, [movieId]);

  if(!movieInfo.title){
    return <h1>Loading...</h1>
  }

  const movieGenres = movieInfo.genres.map((genre, index) => {
    return <span key={index}>{genre}</span>
  })
  console.log(movieGenres);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movieInfo.title}</h1>
        <p>{movieInfo.time}</p>
        {movieGenres}
      </main>
    </>
  );
};

export default Movie;
