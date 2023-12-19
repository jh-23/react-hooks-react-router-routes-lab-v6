import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then((r) => r.json())
      .then(data => setDirectors(data))
  }, []);

  if(directors.length === 0) {
    return (
      <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Loading...</h1>
      </main>
    </>
    );
  }

  const movieDirectors = directors.map((director, index) => {
    console.log(director.movies);
  const directorMovieInfo = director.movies.map((movie, index) => {
    return <li key={index}>{movie}</li>
  })
    return <article key={index}>
                <h2>{director.name}</h2>
                 <ul>{directorMovieInfo}</ul>
            </article>
  })

  console.log(movieDirectors);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {movieDirectors}
      </main>
    </>
  );
};

export default Directors;
