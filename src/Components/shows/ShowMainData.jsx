const ShowMainData = ({ image, name, rating, summary, genres }) => {
  return (
    <div>
      <img src={image ? image.original : '/imagenotfound.png'} alt={name}></img>
      <h2>{name}</h2>
      <div>
        <h3>Rating:</h3>
        {rating.average || 'N/A'}
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <div>
        Genres:
        <div>
          {genres.map(genre => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShowMainData;
