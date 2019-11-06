import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMoives = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=like_count',
    );
    this.setState({
      movies,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.getMoives();
  }

  renderMoive = () => {
    const { movies } = this.state;
    return movies.map(movie => (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        year={movie.year}
        rating={movie.rating}
        summary={movie.summary}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        url={movie.url}
      />
    ));
  };

  render() {
    const { isLoading } = this.state;
    return (
      <section className="container">
        <div className="layer">
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading ...</span>
            </div>
          ) : (
            <div className="movies">{this.renderMoive()}</div>
          )}
        </div>
      </section>
    );
  }
}

export default App;
