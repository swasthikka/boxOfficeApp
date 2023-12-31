import ActorsCard from './ActorsCard';
import { FlexGrid } from '../FlexGrid';
import imagenotfound from '../../lib/imagenotfound.png';
const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          image={data.person.image ? data.person.image.medium : imagenotfound}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
        />
      ))}
    </FlexGrid>
  );
};
export default ActorsGrid;
