import React from "react";

function characterFavorite({ character }) {
  return (
    <article className="m-4 flex flex-col justify-center items-center">
      <img
        className="w-1/2 rounded-full"
        src={character.image}
        alt={"img " + character.name}
      />
      <p className="dark:text-primary font-bold">{character.name}</p>
    </article>
  );
}

export default characterFavorite;
