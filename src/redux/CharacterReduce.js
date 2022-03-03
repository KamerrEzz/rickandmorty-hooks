const stateInicial = {
  favoriteCharacters: [],
};

const favoriteCharacter = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORTE_CHARACTER":
      return {
        ...state,
        favoriteCharacters: [...state.favoriteCharacters, action.payload],
      };
    default:
      return stateInicial;
  }
};

export { favoriteCharacter, stateInicial };
