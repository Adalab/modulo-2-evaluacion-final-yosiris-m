function getFavorites() {
  const localFavorites = localStorage.getItem("favorites");

  let favorites;
  // no hay nada guardado
  if (localFavorites === null) {
    favorites = [];
  } else {
    favorites = JSON.parse(localFavorites);
  }
  return favorites;
}

function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}
