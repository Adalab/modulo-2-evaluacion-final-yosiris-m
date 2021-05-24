"use strict";

const inputName = document.querySelector(".js-inputName");
const btnSearch = document.querySelector(".js-btnSearch");
const btnDeleteFav = document.querySelector(".js-deleteFavorites");
const tvSeriesList = document.querySelector(".js-tvSeriesList");
const tvSeriesFavList = document.querySelector(".js-favorites");

const localFavorites = localStorage.getItem("favorites");

let favorites;
// no hay nada guardado
if (localFavorites === null) {
  favorites = [];
} else {
  favorites = JSON.parse(localFavorites);
}

// extraer los datos de la api
function onBtnSearchClick() {
  fetch(`http://api.tvmaze.com/search/shows?q=${inputName.value}`)
    .then((response) => response.json())
    .then((data) => {
      clearTvSeriesList();
      printTvSeriesList(data);
    });
}
btnSearch.addEventListener("click", onBtnSearchClick);

function printTvSeriesList(data) {
  for (const tvSeries of data) {
    //console.log(tvSeries);
    //crea un elemento en el html
    const item = document.createElement("li");
    tvSeriesList.appendChild(item);
    //crea un elemento en el html
    const title = document.createElement("p");
    //le asigno un valor a un elemento creado en el html
    title.innerText = tvSeries.show.name;
    item.className = "item";

    const img = document.createElement("img");

    if (tvSeries.show.image === null) {
      //la imagen de la serie es nula
      img.src = `https://via.placeholder.com/210x295/ffffff/666666/?text=${tvSeries.show.name}`;
    } else {
      //cuando la imagen de la serie no es nula
      img.src = tvSeries.show.image.medium;
    }
    item.appendChild(img);
    item.appendChild(title);

    //añade la serie que pulsas al listado de favoritas:
    item.addEventListener("click", function () {
      favorites.push(tvSeries);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      item.className = "itemFav";
      printFavorite(tvSeries);
    });
  }
}

// console.log(favorites);

function clearTvSeriesList() {
  //con esta funcion elimino los elementos buscados
  tvSeriesList.innerHTML = "";
}

//function shoFavorites() {
for (const tvSeries of favorites) {
  printFavorite(tvSeries);
}
//}

function printFavorite(tvSeries) {
  const itemFav = document.createElement("li");

  const titleFav = document.createElement("p");
  titleFav.innerText = tvSeries.show.name;

  const imgFav = document.createElement("img");
  imgFav.className = "favListItemImg";

  if (tvSeries.show.image === null) {
    //la imagen de la serie es nula
    imgFav.src = `https://via.placeholder.com/210x295/ffffff/666666/?text=${tvSeries.show.name}`;
  } else {
    //cuando la imagen de la serie no es nula
    imgFav.src = tvSeries.show.image.medium;
  }

  tvSeriesFavList.appendChild(itemFav);
  itemFav.appendChild(imgFav);
  itemFav.appendChild(titleFav);

  const btnDeleteFav = document.createElement("button");
  btnDeleteFav.innerText = "Delete";
  console.log(btnDeleteFav);
  itemFav.appendChild(btnDeleteFav);

  btnDeleteFav.addEventListener("click", function () {
    itemFav.remove();
  });
}
