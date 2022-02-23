import React from 'react';
import './CharacterList.css';
import useCharacters from '../hooks/useCharacters';
import { Link } from 'react-router-dom';

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
            <Link to={character.id}>
              <img src={character.image} alt="" />
              <h2>{character.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
