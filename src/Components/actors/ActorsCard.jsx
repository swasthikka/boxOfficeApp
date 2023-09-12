const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <img src={image} alt={name} height="250px" width="230px" />
      <h2>
        {name} {!!gender && `(${gender})`}
      </h2>
      <p>{country ? `Comes From ${country}` : 'Country not known'}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : 'Alive'} </p>
    </div>
  );
};
export default ActorsCard;
