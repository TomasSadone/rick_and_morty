import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'd9eb17bab542.dd7db60a43fa90e378c6';
export const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) setCharacter(data);
      else window.alert('No hay personajes con ese iD');
    });

    return setCharacter({});
  }, [id]);

  return (
    <div>
      {!character.name ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h2>{character.name}</h2>
          <h2>{character.status}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          <h2>{character.origin.name || origin}</h2>
          <img src={character.image} alt='' />
        </>
      )}
    </div>
  );
};
