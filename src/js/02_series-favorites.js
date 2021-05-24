function printFavorite(obj) {
  const itemFav = document.createElement("li");

  const titleFav = document.createElement("p");
  titleFav.innerText = obj.show.name;
  titleFav.className = "titleFav";

  const imgFav = document.createElement("img");
  imgFav.className = "favListItemImg";

  if (obj.show.image === null) {
    //la imagen de la serie es nula
    imgFav.src = `https://via.placeholder.com/210x295/ffffff/666666/?text=${obj.show.name}`;
  } else {
    //cuando la imagen de la serie no es nula
    imgFav.src = obj.show.image.medium;
  }

  showFavList.appendChild(itemFav);
  itemFav.appendChild(imgFav);
  itemFav.appendChild(titleFav);

  //cuando haga clic en delete se eliminen los datos del arary selecionad
  const btnDeleteFav = document.createElement("button");
  btnDeleteFav.innerText = "Delete";
  itemFav.appendChild(btnDeleteFav);

  btnDeleteFav.addEventListener("click", function () {
    itemFav.remove();
    deleteTvSeries();

    //console.log("quiero eliminar este:", obj.show.id);

    //const favorite = favorites.filter((removeLoSt) => removeLoSt.id !== true);

    // console.log("el id de la bola es:", removeLoSt.show.id);
    // console.log("-------");
  });

  btnDelete.addEventListener("click", function () {
    itemFav.remove();
    deleteTvSeries();
  });

  function deleteTvSeries() {
    favorites = favorites.filter(function (removeLoSt) {
      // console.log("el id de la bola es:", removeLoSt.show.id);
      // console.log("-------");
      return removeLoSt.show.id !== obj.show.id;
    });
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(favorites);
  }
}

// pintar el listado de favoritos al cargar la pagina
for (const obj of favorites) {
  printFavorite(obj);
}
