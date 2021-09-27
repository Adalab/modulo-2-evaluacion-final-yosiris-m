"use strict";

const showList = document.querySelector(".js-showList");
const showFavList = document.querySelector(".js-favorites");

let favorites = getFavorites();

function printShowList(data) {
  clearShowList();
  for (const obj of data) {
    const item = document.createElement("div");
    showList.appendChild(item);

    const title = document.createTextNode(obj.show.name);

    item.className = "itemCommon item";

    const img = document.createElement("img");
    img.className = "imgSearch";

    if (obj.show.image === null) {
      img.src = `https://via.placeholder.com/210x295/ffffff/666666/?text=${obj.show.name}`;
    } else {
      img.src = obj.show.image.medium;
    }
    item.appendChild(img);
    item.appendChild(title);

    if (favorites.find((item) => item.show.id === obj.show.id)) {
      item.className += " itemFav";
      const fav = document.createElement("i");
      fav.className = "fas fa-heart";
      item.appendChild(fav);
    }

    item.addEventListener("click", function () {
      if (favorites.find((item) => obj.show.id === item.show.id)) {
        return;
      }
      favorites.push(obj);
      saveFavorites();
      item.className = "itemCommon itemFav";
      printFavorite(obj);
    });
  }
}

function clearShowList() {
  showList.innerHTML = "";
}
