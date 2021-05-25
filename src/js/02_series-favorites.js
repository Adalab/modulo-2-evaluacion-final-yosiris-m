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

  btnDeleteFav.addEventListener("click", function () {
    itemFav.remove();
    deleteTvSeries();
  });

  btnDelete.addEventListener("click", function () {
    itemFav.remove();
    deleteTvSeries();
  });

  function deleteTvSeries() {
    favorites = favorites.filter(function (removeLoSt) {
      return removeLoSt.show.id !== obj.show.id;
    });

    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(favorites);
  }
}

for (const obj of favorites) {
  printFavorite(obj);
}
