"use strict";

const inputName = document.querySelector(".js-inputName");
const btnSearch = document.querySelector(".js-btnSearch");
const btnDeleteFav = document.querySelector(".js-deleteFavorites");
const tvSeriesList = document.querySelector(".js-tvSeriesList");

//console.log(btnSearch);

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
    console.log(tvSeries);

    const item = document.createElement("li");
    tvSeriesList.appendChild(item);

    const title = document.createElement("p");
    title.innerText = tvSeries.show.name;
    item.appendChild(title);

    const img = document.createElement("img");

    if (tvSeries.show.image === null) {
      //la imagen de la serie es nula
      img.src = `https://via.placeholder.com/210x295/ffffff/666666/?text=${tvSeries.show.name}`;
    } else {
      //cuando la imagen de la serie no es nula
      img.src = tvSeries.show.image.medium;
      // console.log(tvSeries.show.image.medium);
    }
    //img.src = tvSeries.show.image.name;

    item.appendChild(img);
  }
}
function clearTvSeriesList() {
  //con esta funcion elimino los elementos buscados
  tvSeriesList.innerHTML = "";
}

//console.log(onBtnSearchClick());

// Por cada show contenido en el resultado de la búsqueda hay que pintar una tarjeta donde mostramos
//una imagen de la serie y el título.

// cuando la usuaria haga clic en buscar que despliegue un listado con las series.
// hacer un listado de series favoritas con una opcion de eliminar de favoritos
// hacer un boton de eliminar todas las series favoritas.
// guardar toda la informacion en localStorage.
