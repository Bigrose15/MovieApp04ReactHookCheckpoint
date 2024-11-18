import Movielist from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Movies from "./Movies";
import AddMovie from "./components/AddMovie";
import "./index.css";

function App() {
  const [originalMovies, setOriginalMovies] = useState(Movies); //this line of code is setting the initial state of the originalMovies to the Movies array that we imported from the Movies.js file.
  const [filteredMovies, setFilteredMovies] = useState(originalMovies); //this line of code is setting the initial state of the filteredMovies to the Movies array that we imported from the Movies.js file.
  const [filterTitle, setFilterTiltle] = useState(""); //this line of code is setting the initial state of the filterTitle to an empty string.
  const [filterRating, setFilterRating] = useState(0); //this line of code is setting the initial state of the filterRating to 0.

  useEffect(() => {
    const filter = originalMovies.filter((eachmovie) => {
      const matchesTitle = filterTitle
        ? eachmovie.title.toLowerCase().includes(filterTitle.toLowerCase())
        : true;
      const matchesRating = filterRating
        ? eachmovie.rating === filterRating
        : true;
      return matchesTitle && matchesRating;
    });
    setFilteredMovies(filter);
  }, [originalMovies, filterRating, filterTitle]);

  const titleChangeHandler = (title) => {
    title ? setFilterTiltle(title) : setFilterTiltle(""); //this line of code is checking if the title is not empty, then it will set the filterTitle to the title that was entered by the user. If the title is empty, then it will set the filterTitle to an empty string.
  };

  const ratingChangeHandler = (rating) => {
    rating ? setFilterRating(Number(rating)) : setFilterRating(0); //this line of code is checking if the rating is not empty, then it will set the filterRating to the rating that was entered by the user. If the rating is empty, then it will set the filterRating to 0.
  };

  //Fucntion to add a new movie to OriginalMovies
  const addNewMovie = (newMovie) => {
    setOriginalMovies([...originalMovies, newMovie]);
  };
  return (
    <Container>
      <AddMovie onAddMovie={addNewMovie} />
      <MovieFilter
        onTitleChange={titleChangeHandler}
        onRatingChange={ratingChangeHandler}
      />
      <Movielist movies={filteredMovies} />
    </Container>
  );
}

export default App;
