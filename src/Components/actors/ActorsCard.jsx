import { SearchCard, SearchImgWrapper } from '../SearchCard';

const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} height="250px" width="230px" />
      </SearchImgWrapper>
      <h2>
        {name} {!!gender && `(${gender})`}
      </h2>
      <p>{country ? `Comes From ${country}` : 'Country not known'}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : 'Alive'} </p>
    </SearchCard>
  );
};
export default ActorsCard;
