(function () {
  "use strict";
  var nombre = document.getElementById("nombre");
  var email = document.getElementById("email");
  var tel = document.getElementById("tel");
  var tipo = document.getElementById("tipo");
  var guardar = document.getElementById("guardar");

  guardar.addEventListener("click", function () {
    if (
      tipo.value == 0 ||
      nombre.value === "" ||
      email.value === "" ||
      tel.value === ""
    ) {
      alert("Te falta rellenar algo");
    } else {
      var tabla = document.querySelector(".table");
      var row = document.createElement("div");
      row.classList.add("row");
      row.innerHTML = `<div class="column">${nombre.value}</div>
        <div class="column">${email.value}</div>
        <div class="column">${tel.value}</div>
        <div class="column">${tipo.value}</div>`;
      tabla.appendChild(row);
    }
  });
})();
