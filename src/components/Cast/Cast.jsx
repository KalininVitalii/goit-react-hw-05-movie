import { Info } from './Cast.styled';

export const CastList = ({ movieInfo: { cast } }) => {
  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, name, profile_path, character }) => (
            <Info key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://st2.depositphotos.com/1898481/6448/i/600/depositphotos_64486573-stock-photo-people.jpg'
                }
                alt={name}
                width="50"
                height="75"
              />
              <div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </Info>
          ))}
        </ul>
      ) : (
        <p>We have no more details</p>
      )}
    </div>
  );
};
