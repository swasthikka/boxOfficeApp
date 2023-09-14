const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img
              src={person.image ? person.image.medium : 'imagenotfound.png'}
            />
          </div>
          <div>
            {person.name} | {character.name} {voice ? '|Voiceover' : null}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cast;
