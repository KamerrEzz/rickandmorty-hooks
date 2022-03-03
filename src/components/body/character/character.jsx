import React, { useState, useReducer, useMemo, useRef, useCallback } from "react";
import CharacterCard from "./characterCard";
import CharacterFavorite from "./characterFavorite.jsx";
import CharacterSearh from "./characterSearh";
import {
  favoriteCharacter,
  stateInicial,
} from "../../../redux/CharacterReduce";
import useCharacter from "../../../hooks/useCharacter";

function Character() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const searchInput = useRef(null);
  const [favoriteCharacters, dispatch] = useReducer(
    favoriteCharacter,
    stateInicial
    );
    const character = useCharacter(`https://rickandmortyapi.com/api/character?page=${page}`);
    
  const addFavorite = (character) => {
    console.log(character);
    dispatch({
      type: "ADD_FAVORTE_CHARACTER",
      payload: character,
    });
  };

  // const handleSearch = (e) => {
  //   // setSearch(e.target.value);
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

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
        <CharacterSearh search={search} searchInput={searchInput} handleSearch={handleSearch} />
      </section>
      <section>
        <button className="p-2 bg-slate-500 m-2" onClick={() => setPage(page - 1)} > ◄ </button>
        <button className="p-2 bg-slate-500 m-2" onClick={() => setPage(page + 1)} > ► </button>
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
