import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MoviesAPI } from 'servises/Api';
import { SearchBox } from 'components/SearchMovie/SearchMovie';
import { MovieList } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const filterParam = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    const getMovies = async filterParam => {
      setIsLoading(true);
      try {
        const moviesResponse = await MoviesAPI.fetchMovieBySearch(filterParam);

        if (!moviesResponse.length) {
          throw new Error("We don't have any information on this movie.");
        }
        setMovies(moviesResponse);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (filterParam) {
      getMovies(filterParam);
    }
  }, [filterParam]);
  console.log(isLoading);
  const onFormSubmit = event => {
    event.preventDefault();
    setSearchParams({ searchQuery });
    setMovies([]);
    setError(null);
  };

  const onInput = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <SearchBox
        value={searchQuery}
        onInput={onInput}
        onFormSubmit={onFormSubmit}
      />
      {error && <p>We didn't find anything!</p>}
      {movies.length > 0 && (
        <MovieList>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.original_name ?? movie.title ?? movie.name}
              </Link>
            </li>
          ))}
        </MovieList>
      )}
    </>
  );
};

export default Movies;
