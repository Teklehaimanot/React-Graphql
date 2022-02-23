import React from 'react';
import './CharacterList.css';
import useCharacters from '../hooks/useCharacters';

const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  if (loading) {
    return <div>spinner...</div>;
  }
  if (error) {
    return <div>something went wrong</div>;
  }
  console.log({ error, loading, data });
  return (
    <div className="CaracterList">
      {data.characters.results.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
