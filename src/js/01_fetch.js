function onFormSubmit(ev) {
  ev.preventDefault();

  fetch(`//api.tvmaze.com/search/shows?q=${inputName.value}`)
    .then((response) => response.json())
    .then((data) => {
      printShowList(data);
    });
}

form.addEventListener("submit", onFormSubmit);
