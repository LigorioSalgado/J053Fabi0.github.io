(function () {
  // "use strict";
  var banderas = document.querySelector(".flags");
  var countryName = document.querySelector("#country-name");
  banderas.innerHTML = ""; // Esto borra el contenido de las banderas
  var resultados = document.querySelector(".results");
  resultados.style.visibility = "hidden"; // Escondemos los resultados

  var paises = [];
  var correcto;

  function obtenerPaises(paisesHastaAhora) {
    var nuevoPais = datos[Math.floor(Math.random() * datos.length)];
    while (paisesHastaAhora.includes(nuevoPais)) {
      nuevoPais = datos[Math.floor(Math.random() * datos.length)];
    }
    return nuevoPais;
  }

  for (i = 0; i < 3; i++) {
    paises.push(obtenerPaises(paises));
  }

  for (i = 0; i < paises.length; i++) {
    var img = document.createElement("img");
    img.setAttribute("src", paises[i].flag); // Le agrega un atributo
    img.setAttribute("id", paises[i].translations.es); // Le agrega un atributo
    img.addEventListener("click", (element) => {
      // Añades el listener de cuando haces click
      if (resultados.style.visibility != "visible") {
        if (element.target.id == correcto.translations.es) {
          document.getElementById("population").innerHTML =
            "<b>Población:</b> " + correcto.population;

          document.getElementById("capital").innerHTML =
            "<b>Capital:</b> " + correcto.capital;

          resultados.style.visibility = "visible";
        } else {
          alert("Nope");
        }
      } else {
        window.location.reload(false);
      }
    });
    banderas.appendChild(img); // Añade la imágen a las banderas
  }

  correcto = paises[Math.floor(Math.random() * paises.length)]; // Selecciona un país al azar de los que hemos seleccionado
  countryName.innerHTML = correcto.translations.es; // Pone el countryName al título del país correcto
})();
