"use strict";

const inputName = document.querySelector(".js-inputName");
const btnSearch = document.querySelector(".js-btnSearch");
const btnDeleteFav = document.querySelector(".js-deleteFavorites");
const showList = document.querySelector(".js-showList");
const showFavList = document.querySelector(".js-favorites");

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
      clearShowList();
      printShowList(data);
    });
}
btnSearch.addEventListener("click", onBtnSearchClick);

function printShowList(data) {
  for (const obj of data) {
    //console.log(obj);
    //crea un elemento en el html
    const item = document.createElement("li");
    showList.appendChild(item);
    //crea un elemento en el html
    const title = document.createElement("p");
    //le asigno un valor a un elemento creado en el html
    title.innerText = obj.show.name;
    item.className = "item";

    const img = document.createElement("img");

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
      localStorage.setItem("favorites", JSON.stringify(favorites));
      item.className = "itemFav";
      printFavorite(obj);
    });
  }
}

// console.log(favorites);

function clearShowList() {
  //con esta funcion elimino los elementos buscados
  showList.innerHTML = "";
}

//function shoFavorites() {
for (const obj of favorites) {
  printFavorite(obj);
}
//}

function printFavorite(obj) {
  const itemFav = document.createElement("li");

  const titleFav = document.createElement("p");
  titleFav.innerText = obj.show.name;

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

  const btnDeleteFav = document.createElement("button");
  btnDeleteFav.innerText = "Delete";
  itemFav.appendChild(btnDeleteFav);

  btnDeleteFav.addEventListener("click", function () {
    itemFav.remove();

    //console.log("quiero eliminar este:", obj.show.id);

    //const favorite = favorites.filter((removeLoSt) => removeLoSt.id !== true);
    favorites = favorites.filter(function (removeLoSt) {
      console.log("el id de la bola es:", removeLoSt.show.id);
      console.log("-------");
      return removeLoSt.show.id !== obj.show.id;
    });
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(favorites);
    //cuando haga clic en delete se eliminen los datos del arary selecionad
  });

  //favorites = JSON.stringify(favorite);
}
