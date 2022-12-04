// this file returns the action object by calling a desired function

// defining actions
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";

// calling actions

export function addMovie(data) {
  console.log("export function addMovie(data) {");
  return {
    type: ADD_MOVIE,
    movie: data
  };
}

export function addFavourite(data) {
  return {
    type: ADD_FAVOURITE,
    movie: data
  };
}

export function removeFavourite(data) {
  return {
    type: REMOVE_FAVOURITE,
    movie: data
  };
}

export function setShowFavourite(val) {
  return {
    type: SET_SHOW_FAVOURITE,
    val: val
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie
  };
}

export function handleMovieSearch(movieTitle) {
  const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movieTitle}`;
  return function(dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(movie => {
        console.log("Movie", movie);

        //dispatch an action
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie: movie
  };
}
