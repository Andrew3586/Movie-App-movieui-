import { combineReducers } from "redux";

import {
  ADD_MOVIE,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURITE,
  ADD_SEARCH_RESULT,
  ADD_MOVIE_TO_LIST
} from "../actions/index";

const initialMovieState = {
  list: [],
  favourites: [],
  setShowFavourite: false
};

export function movie(state = initialMovieState, action) {
  // default value of state is undefined   and use switch rather than multiple if
  if (action.type === ADD_MOVIE) {
    console.log("action.type === ADD_MOVIE");
    return {
      ...state,
      list: action.movie
    };
  }
  if (action.type === ADD_FAVOURITE) {
    return {
      ...state,
      favourites: [action.movie, ...state.favourites]
    };
  }
  if (action.type === REMOVE_FAVOURITE) {
    const filteredArray = state.favourites.filter(
      movie => movie.Title !== action.movie.Title
    );
    return {
      ...state,
      favourites: filteredArray
    };
  }
  if (action.type === SET_SHOW_FAVOURITE) {
    return {
      ...state,
      setShowFavourite: action.val
    };
  }
  if (action.type === ADD_MOVIE_TO_LIST) {
    return {
      ...state,
      list: [action.movie, ...state.list]
    };
  }

  return state;
}

const initialMovieSearchState = {
  result: {},
  showSearchResults: false
};
export function search(state = initialMovieSearchState, action) {
  if (action.type === ADD_SEARCH_RESULT) {
    return {
      ...state,
      result: action.movie,
      showSearchResults: true
    };
  }
  if (action.type === ADD_MOVIE_TO_LIST) {
    return {
      ...state,
      showSearchResults: false
    };
  }
  return state;
}

export default combineReducers({
  movie: movie,
  search: search
});
