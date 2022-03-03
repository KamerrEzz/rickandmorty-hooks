import React from "react";

function CharacterCard({ character, addFavorite }) {
  return (
    <article className="max-w-xs rounded shadow-lg m-1 bg-slate-200 dark:bg-secondary">
      <img
        className="w-full p-2"
        src={character.image}
        alt={"img " + character.name}
      />
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2 dark:text-primary">
          {character.name}
        </p>
        <div className="flex justify-center items-start flex-col p-1">
          <p className="text-sm dark:text-primary">
            <span className="font-bold ">Estado:</span> {character.status}
          </p>
          <p className="text-sm dark:text-primary">
            <span className="font-bold ">Especie: </span> {character.species}
          </p>
          <p className="text-sm dark:text-primary">
            <span className="font-bold  dark:text-primary">Origen:</span>{" "}
            {character.origin.name}
          </p>
          <button onClick={() => addFavorite(character)} className="w-full border-transparent mt-4 border text-base font-medium text-gray-700 bg-yellow-300 px-4 py-2 hover:bg-yellow-400 focus:outline-none">
            ♥
          </button>
        </div>
      </div>
    </article>
  );
}

export default CharacterCard;
