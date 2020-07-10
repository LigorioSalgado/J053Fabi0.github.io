var to = 60;
var from = 0;
(async function () {
  // Añado un event listener al botón de cancelar búsqueda
  document.getElementById("cancelSearch").addEventListener("click", () => {
    document.getElementById("spinnerDelFondo").style.visibility = "visible";
    document.getElementById("cancelSearch").style.display = "none";
    document.getElementById("aquiVanTodos").innerHTML = "";
    document.getElementById("buscar").value = "";
    loadCards(document.getElementById("aquiVanTodos"), 0, to);
  });

  // Cargo las primeras cartas
  var contenedor = document.getElementById("aquiVanTodos");
  await loadCards(contenedor, from, to);

  // Esto detecta cuando llegas al fondo de la página y que el botón de cancelar búsqueda esté escondido
  window.onscroll = function () {
    if (
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
      document.getElementById("cancelSearch").style.display == "none"
    ) {
      // Entonces carga unos nuevos pokemons
      from = to;
      to = 30 + to > pokemons.length ? pokemons.length : 30 + to;
      loadCards(contenedor, from, to);

      // Si llegamos al final de la lista de pokemons, escondemos el cargador.
      if (to == pokemons.length) {
        document.getElementById("spinnerDelFondo").style.visibility = "hidden";
      }
    }
  };

  // Añado el evento de presionar enter a la barra de búsqueda
  document.getElementById("buscar").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      search();
    }
  });
})();

// Esto carga cartas de from hasta to
function loadCards(contenedor, from, to) {
  for (var i = from; i < to; i++) {
    var pokemon = pokemons[i];
    addPokemon(contenedor, pokemon);
  }
}

// Esto añade una sola carta al contenedor
function addPokemon(contenedor, pokemon) {
  var types = "";
  pokemon.type.forEach((item) => {
    var badgeType = "";
    if (item == "Grass" || item == "Bug") {
      badgeType = "badge-success";
    } else if (item == "Poison" || item == "Psychic") {
      badgeType = "badge-purple";
    } else if (item == "Flying" || item == "Electric") {
      badgeType = "badge-warning";
    } else if (item == "Fire" || item == "Fighting" || item == "Dragon") {
      badgeType = "badge-danger";
    } else if (item == "Water" || item == "Ice") {
      badgeType = "badge-info";
    } else if (item == "Ground") {
      badgeType = "badge-borwn";
    } else if (
      item == "Ghost" ||
      item == "Rock" ||
      item == "Normal" ||
      item == "Steel"
    ) {
      badgeType = "badge-secondary";
    } else if (item == "Fairy") {
      badgeType = "badge-pink";
    } else if (item == "Dark") {
      badgeType = "badge-dark";
    } else {
      badgeType = "badge-secondary";
    }

    types = types + `<span class="badge ${badgeType}">${item}</span> `;
  });
  contenedor.innerHTML =
    contenedor.innerHTML +
    `
  <div class="col">
    <div
      class="card mb-3"
    >
      <div class="row no-gutters">
        <div class="col-3 mt-4">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
            class="card-img"
          />
        </div>
        <div class="col-9">
          <div class="card-body">
            <h5 class="card-title">${pokemon.name.english}</h5>
            <div class="row">
              <div class="col-xl-6">
                <h6 class"card-subtitle ">Attack: <span class="badge badge-danger badge-pill">${pokemon.base.Attack}</span></h6>
              </div>
              <div class="col-xl-6">
                <h6 class"card-subtitle ">HP: <span class="badge badge-success badge-pill">${pokemon.base.HP}</span></h6>
              </div>
            </div>
            <div class="collapse" id="unique_${pokemon.id}">
              <h6 class"card-subtitle ">Type: ${types}</h6>
              <h6 class"card-subtitle">Deffense: <span class="badge badge-dark badge-pill">${pokemon.base.Defense}</span></h6>
              <h6 class"card-subtitle">Sp. Attack: <span class="badge badge-danger badge-pill">${pokemon.base["Sp. Attack"]}</span></h6>
              <h6 class"card-subtitle">Sp. Defense: <span class="badge badge-dark badge-pill">${pokemon.base["Sp. Defense"]}</span></h6>
              <h6 class"card-subtitle">Speed: <span class="badge badge-warning badge-pill">${pokemon.base.Speed}</span></h6>
              <h6 class"card-subtitle">National ID: <span class="badge badge-secondary badge-pill">${pokemon.id}</span></h6>
            </div>
            <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#unique_${pokemon.id}" aria-expanded="false" aria-controls="#unique_${pokemon.id}">Expand info</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
}

function search() {
  var results = [];
  var searchField = document.getElementById("buscar").value.trim();
  var re = new RegExp(searchField, "i");

  if (searchField.length < 2 && isNaN(parseInt(searchField))) {
    document.getElementById("alerta_titulo").innerHTML =
      "La búsqueda es demasiado corta";
    document.getElementById("alerta_mensaje").innerHTML =
      "Intenta usar por lo menos dos caracteres en tu búsqueda.";
    $("#alerta").modal();
    return;
  }

  // Si está buscando un string (el if) o no (el else)
  if (isNaN(parseInt(searchField))) {
    for (var i = 0; i < pokemons.length; i++) {
      if (pokemons[i].name.english.search(re) >= 0) {
        results.push(pokemons[i].id - 1);
      }
    }
  } else {
    if (parseInt(searchField) <= pokemons.length && parseInt(searchField) > 0)
      results.push(parseInt(searchField) - 1);
  }

  // Reviso si se encontró algo para avisar o mostrar los resultados
  if (results.length > 0) {
    // Escondo el cargador y hago visible el botón para cancelar
    document.getElementById("spinnerDelFondo").style.visibility = "hidden";
    document.getElementById("cancelSearch").style.display = "inline-block";

    document.getElementById("aquiVanTodos").innerHTML = "";
    for (var i = 0; i < results.length; i++) {
      addPokemon(document.getElementById("aquiVanTodos"), pokemons[results[i]]);
    }
  } else {
    document.getElementById("alerta_titulo").innerHTML = "Rayos...";
    document.getElementById("alerta_mensaje").innerHTML =
      "No hemos encontrado nada. Quizá puedas intentarlo de nuevo con otras palabras clave.";
    $("#alerta").modal();
  }
}
