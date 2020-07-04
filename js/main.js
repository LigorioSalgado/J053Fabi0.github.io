(function () {
  var dificultad = 3;

  var d = new URLSearchParams(window.location.search).get("d");
  if (d && !isNaN(parseInt(d))) {
    dificultad = parseInt(d);
  }

  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

  var correcto = Math.floor(Math.random() * dificultad) + 1;
  var main = document.querySelector("main");

  document.getElementById(
    "color_to_guess"
  ).innerHTML = `Selecciona el color que sea:<br><b style="color: red;">R</b><b style="color: green;">G</b><b style="color: blue;">B</b>: <b style="color: red;">${red}</b>, <b style="color: green;">${green}</b>, <b style="color: blue;">${blue}</b>.`;

  function hizoClick(element) {
    var tarjeta = document.getElementById(element.target.id);
    var phrase = document.createElement("p");
    var div = document.getElementById(element.target.id);

    if (tarjeta.style.backgroundColor == `rgb(${red}, ${green}, ${blue})`) {
      phrase.innerHTML = "¡Muy bien!";
      div.appendChild(phrase);

      if (confirm("¡Lo lograste! ¿Quieres intentarlo de nuevo?")) {
        window.location.reload(false);
      } else {
        alert("De acuerdo. Si quieres volver a jugar solo regarga la página.");
      }
    } else {
      phrase.innerHTML = "¡Nope!";

      div.appendChild(phrase);

      div.style.opacity = 1;
      div.style.zIndex = -1;
      div.style.width = "100%"; // Le pongo los valores, porque por alguna razón no los tiene definidos
      setTimeout(() => {
        // Luego de un segundo comienza la animación
        var intervalo = setInterval(() => {
          div.style.opacity = div.style.opacity - 0.01; // Le baja la opacidad
          div.style.width = `${parseInt(div.style.width) - 1}%`; // Y le baja el width
          if (div.style.opacity == 0) {
            // Cuando la opacidad es 0, entonces borramos el nodo y detenemos el intervalo
            clearInterval(intervalo);
            div.parentNode.removeChild(div);
          }
        }, 10);
      }, 1000);
    }

    document
      .getElementById(element.target.id)
      .removeEventListener("click", hizoClick);
  }

  for (i = 0; i < dificultad; i++) {
    var newred = Math.floor(Math.random() * 255);
    var newgreen = Math.floor(Math.random() * 255);
    var newblue = Math.floor(Math.random() * 255);

    var color = document.createElement("div");

    color.setAttribute("class", "color");
    color.setAttribute("id", "color_" + (i + 1));

    color.addEventListener("click", hizoClick);

    if (i == correcto - 1) {
      color.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 1)`;
    } else {
      color.style.backgroundColor = `rgba(${newred}, ${newgreen}, ${newblue}, 1)`;
    }

    main.appendChild(color);
  }
})();

function changeDificulty(new_d) {
  d = new_d;
  location.assign(location.pathname + "?d=" + new_d);
}
