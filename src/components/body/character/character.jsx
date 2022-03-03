import React, { useState, useEffect, useReducer, useMemo } from "react";
import CharacterCard from "./characterCard";
import CharacterFavorite from "./characterFavorite.jsx";
import {
  favoriteCharacter,
  stateInicial,
} from "../../../redux/CharacterReduce";

function Character() {
  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState("");
  const [favoriteCharacters, dispatch] = useReducer(
    favoriteCharacter,
    stateInicial
  );

  const addFavorite = (character) => {
    console.log(character);
    dispatch({
      type: "ADD_FAVORTE_CHARACTER",
      payload: character,
    });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // const filtederedCharacters = character.filter((character) => {
  //   return character.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filtederedCharacters = useMemo(
    () =>
      character.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search, character]
  );

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <section>
        <p className="dark:text-primary text-lg text-center">
          Personajes Favoritos {favoriteCharacters.favoriteCharacters.length}
        </p>
        <div className="flex flex-wrap justify-center">
          {favoriteCharacters.favoriteCharacters.map((character) => (
            <CharacterFavorite key={character.id} character={character} />
          ))}
        </div>
      </section>
      <section>
        <input type="text" value={search} onChange={handleSearch} />
      </section>
      <section className="flex justify-center items-center flex-wrap">
        {filtederedCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            addFavorite={addFavorite}
          />
        ))}
      </section>
    </React.Fragment>
  );
}

export default Character;
