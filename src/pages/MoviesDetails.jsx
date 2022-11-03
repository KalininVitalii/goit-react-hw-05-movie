import {
  Outlet,
  useParams,
  useLocation,
  useNavigate,
  Link,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { MoviesAPI } from '../servises/MoviesApi';
import { Loader } from '../components/Loader/Loader';
import { Main, Btn, Title } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    const getMovie = async movieId => {
      setIsLoading(true);
      try {
        const movieDetails = await MoviesAPI.fetchMovieById(movieId);
        setMovieInfo(movieDetails);
      } catch (error) {
        setError(error.message);
      }
    };

    getMovie(movieId);
  }, [movieId]);

  const onBtnClick = () => {
    navigation(location?.state?.from ?? '/');
  };

  return (
    <>
      {movieInfo && (
        <>
          <Btn type="button" onClick={onBtnClick}>
            Go back
          </Btn>
          <Main>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                alt={movieInfo.title}
                width="250"
              />
            </div>
            <div>
              <h2>
                {movieInfo.title} (
                {new Date(movieInfo.release_date).getFullYear()})
              </h2>
              <p>User score: {Math.round(movieInfo.vote_average * 10)} %</p>
              <h3>Overview</h3>
              <p>{movieInfo.overview}</p>
              <h3>Genres</h3>
              <p>{movieInfo.genres?.map(({ name }) => name).join(', ')}</p>
            </div>
          </Main>
          <Title>Additional information</Title>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
        </>
      )}
      {error && <p>We don't have any information on this movie.</p>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
