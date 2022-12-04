import { data } from "../data";
import React from "react";
import Navbar from "./Navbar";
import MovieCart from "./MovieCart";
import { addMovie, setShowFavourite } from "../actions/index";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    // make api call

    // calling subscribe
    store.subscribe(() => {
      console.log("Subscribe called after dispatch");
      this.forceUpdate();
    });

    // dispatch action
    store.dispatch(addMovie(data));
  }

  isFavouriteMovie = checkMovie => {
    const { movie } = this.props.store.getState();
    const { favourites } = movie;
    const index = favourites.indexOf(checkMovie);
    if (index !== -1) {
      // movie found
      return true;
    }
    return false;
  };

  favouritesTabSelected = val => {
    this.props.store.dispatch(setShowFavourite(val));
  };

  render() {
    const { movie, search } = this.props.store.getState();
    const { list, favourites, setShowFavourite } = movie; // {movie:{list:[], fav:[]}, search:{result:{]}}}
    const displayMovies = setShowFavourite ? favourites : list;
    console.log(this.props.store.getState());
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className="tab"
              onClick={() => this.favouritesTabSelected(false)}
            >
              Movies
            </div>
            <div
              className="tab"
              onClick={() => this.favouritesTabSelected(true)}
            >
              FAVOURITES
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCart
                movie={movie}
                key={`movie-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isFavouriteMovie(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
