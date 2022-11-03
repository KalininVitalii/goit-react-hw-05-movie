export const ReviewList = ({ movieInfo: { results } }) => {
  return (
    <div>
      {results.length > 0 ? (
        <ul>
          {results.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>Character: {content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
