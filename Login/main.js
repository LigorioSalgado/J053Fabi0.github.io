(function () {
  "use strict";
  document.getElementById("botonEnviar").addEventListener("click", () => {
    var email = document.getElementById("emailInput");
    var password = document.getElementById("passwordInput");
    var modal_title = document.getElementById("modal-title");
    var modal_text = document.getElementById("modal-text");

    if (email.value != "" && password.value != "") {
      modal_title.innerHTML = "Perfecto";
      modal_text.innerHTML = "Serás redirigido en un momento.";

      $("#alerta").modal("show");
    } else {
      modal_title.innerHTML = "Algo ha salido mal";
      modal_text.innerHTML = "El usuario o la contraseña son incorrectos";

      $("#alerta").modal("show");
    }
  });
})();
