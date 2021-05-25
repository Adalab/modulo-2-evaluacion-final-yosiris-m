"use strict";

const inputName = document.querySelector(".js-inputName");
const form = document.querySelector(".js-form");
const btnDelete = document.querySelector(".js-deleteFavorites");
const showList = document.querySelector(".js-showList");
const showFavList = document.querySelector(".js-favorites");

let favorites = getFavorites();

function printShowList(data) {
  for (const obj of data) {
    //console.log(obj);
    //crea un elemento en el html
    const item = document.createElement("li");
    showList.appendChild(item);
    //crea un elemento en el html
    const title = document.createElement("p");
    //p.className = "titleFav";
    //le asigno un valor a un elemento creado en el html
    title.innerText = obj.show.name;
    item.className = "itemCommon item";

    const img = document.createElement("img");
    img.className = "imgSearch";

    if (obj.show.image === null) {
      //la imagen de la serie es nula
      img.src = `https://via.placeholder.com/210x295/ffffff/666666/?text=${obj.show.name}`;
    } else {
      //cuando la imagen de la serie no es nula
      img.src = obj.show.image.medium;
    }
    item.appendChild(img);
    item.appendChild(title);

    //añade la serie que pulsas al listado de favoritas:
    item.addEventListener("click", function () {
      favorites.push(obj);
      saveFavorites();
      item.className = "itemCommon itemFav";
      printFavorite(obj);
    });
  }
}

// console.log(favorites);

function clearShowList() {
  //con esta funcion elimino los elementos buscados
  showList.innerHTML = "";
}
