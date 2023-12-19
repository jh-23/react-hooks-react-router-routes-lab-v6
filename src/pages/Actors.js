import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then((r) => r.json())
      .then(data => setActors(data))
  }, []);

  if(actors.length === 0) {
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

  const movieActors = actors.map((actor) => {

    const movieListActors = actor.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })

    return <article key={actor.name}>
              <h2>{actor.name}</h2>
              <ul>{movieListActors}</ul>
            </article>       
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {movieActors}
      </main>
    </>
  );
};

export default Actors;
