import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from '../components/Cast/Cast';
import { MoviesAPI } from '../servises/Api';
import { Loader } from 'components/Loader/Loader';

const CastPage = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async movieId => {
      setIsLoading(true);
      try {
        const movieDetails = await MoviesAPI.fetchMovieCast(movieId);
        setMovieInfo(movieDetails);
      } catch (error) {
        setError(error.message);
      }
    };
    getMovie(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>We have no more details</p>}
      {movieInfo && <CastList movieInfo={movieInfo} />}
    </>
  );
};

export default CastPage;
