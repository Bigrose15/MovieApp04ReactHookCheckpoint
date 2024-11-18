import Movielist from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Movies from "./Movies";
import AddMovie from "./components/AddMovie";

//This is the main component of the application. It is the parent component that holds all the other components.
function App() {
  const [originalMovies, setOriginalMovies] = useState(Movies); //this line of code is setting the initial state of the originalMovies to the Movies array that we imported from the Movies.js file.
  const [filteredMovies, setFilteredMovies] = useState(originalMovies); //this line of code is setting the initial state of the filteredMovies to the Movies array that we imported from the Movies.js file.
  const [filterTitle, setFilterTiltle] = useState(""); //this line of code is setting the initial state of the filterTitle to an empty string.
  const [filterRating, setFilterRating] = useState(0); //this line of code is setting the initial state of the filterRating to 0.

  //This useEffect hook is used to filter the movies based on the title and rating that the user entered.
  useEffect(() => {
    //this line of code is using the useEffect hook to filter the movies based on the title and rating that the user entered.
    const filter = originalMovies.filter((eachmovie) => {
      const matchesTitle = filterTitle
        ? eachmovie.title.toLowerCase().includes(filterTitle.toLowerCase()) //this line of code is checking if the filterTitle is not empty, then it will check if the title of each movie includes the filterTitle that was entered by the user. If the filterTitle is empty, then it will return true.
        : true;
      const matchesRating = filterRating //this line of code is checking if the filterRating is not empty, then it will check if the rating of each movie is equal to the filterRating that was entered by the user. If the filterRating is empty, then it will return true.
        ? eachmovie.rating === filterRating
        : true;
      return matchesTitle && matchesRating; //this line of code is returning the movies that match the title and rating that the user entered.
    });
    setFilteredMovies(filter); //this line of code is setting the filteredMovies state to the movies that match the title and rating that the user entered.
  }, [originalMovies, filterRating, filterTitle]); //this line of code is telling the useEffect hook to run the function whenever the originalMovies, filterRating, or filterTitle changes.

  //Function to handle the change in the title input field.
  const titleChangeHandler = (title) => {
    title ? setFilterTiltle(title) : setFilterTiltle(""); //this line of code is checking if the title is not empty, then it will set the filterTitle to the title that was entered by the user. If the title is empty, then it will set the filterTitle to an empty string.
  };

  const ratingChangeHandler = (rating) => {
    rating ? setFilterRating(Number(rating)) : setFilterRating(0); //this line of code is checking if the rating is not empty, then it will set the filterRating to the rating that was entered by the user. If the rating is empty, then it will set the filterRating to 0.
  };

  //Fucntin to add a new movie to OriginalMovies
  const addNewMovie = (newMovie) => {
    setOriginalMovies([...originalMovies, newMovie]); //this line of code is adding the new movie that was entered by the user to the originalMovies array.
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
