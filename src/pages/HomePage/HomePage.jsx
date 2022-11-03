import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MoviesAPI } from '../../servises/Api';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  console.log(isLoading);
  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const moviesResponse = await MoviesAPI.fetchMovies();
        if (!moviesResponse.length) {
          throw new Error("We don't have any information on this movie.");
        }
        setTrendMovies(moviesResponse);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      {error && <p>Sorry.</p>}
      {!!trendMovies.length && (
        <>
          <h2>Trending today</h2>
          <ul>
            {trendMovies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.original_name ?? movie.title ?? movie.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
export default HomePage;
