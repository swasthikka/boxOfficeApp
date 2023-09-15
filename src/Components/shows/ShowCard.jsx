const ShowCard = ({ name, image, id, summary }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No description available';

  return (
    <div>
      <img src={image} alt={name} height="250px" width="230px" />
      <h2>{name}</h2>
      <p>{summaryStripped}</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button type="button">Star Me</button>
      </div>
    </div>
  );
};
export default ShowCard;
