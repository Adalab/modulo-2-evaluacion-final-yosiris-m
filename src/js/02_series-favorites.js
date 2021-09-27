"use strict";
function printFavorite(obj) {
  const itemFav = document.createElement("li");
  itemFav.className = "titleBox ";
  const titleFav = document.createElement("p");
  titleFav.innerText = obj.show.name;
  titleFav.className = "titleFav titleButton";

  const imgFav = document.createElement("img");
  imgFav.className = "favListItemImg";

  if (obj.show.image === null) {
    imgFav.src = `https://via.placeholder.com/210x295/ffffff/666666/?text=${obj.show.name}`;
  } else {
    imgFav.src = obj.show.image.medium;
  }

  showFavList.appendChild(itemFav);
  itemFav.appendChild(imgFav);

  itemFav.appendChild(titleFav);

  const btnDeleteFav = document.createElement("button");
  btnDeleteFav.className = "buttonFav titleButton";
  btnDeleteFav.innerText = "x";
  itemFav.appendChild(btnDeleteFav);

  const deleteFavorite = () => {
    itemFav.remove();
    deleteTvSeries();
  };

  btnDeleteFav.addEventListener("click", deleteFavorite);
  btnDelete.addEventListener("click", deleteFavorite);

  function deleteTvSeries() {
    favorites = favorites.filter(function (removeLoSt) {
      return removeLoSt.show.id !== obj.show.id;
    });

    saveFavorites();
  }
}

for (const obj of favorites) {
  printFavorite(obj);
}
