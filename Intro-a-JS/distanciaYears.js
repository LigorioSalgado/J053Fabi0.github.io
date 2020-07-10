var primero, segundo;
while (true) {
  primero = prompt("Dame el año actual.");
  segundo = prompt("Dame el otro año del pasado o del futuro.");
  if (!isNaN(primero) && !isNaN(segundo)) {
    break;
  } else {
    alert(
      "Lo siento, primero de tus uno de los años no era un número. ¿Podrías evitar usar espacios o letras?|, "
    );
  }
}

primero = parseInt(primero);
segundo = parseInt(segundo);

if (primero - segundo < 0) {
  alert(
    `Faltan ${segundo - primero} año${
      segundo - primero == 1 ? "" : "s"
    } para el ${segundo}.`
  );
} else if (primero - segundo > 0) {
  alert(
    `Ha${primero - segundo == 1 ? "" : "n"} pasado ${primero - segundo} año${
      primero - segundo == 1 ? "" : "s"
    } desde el ${segundo}.`
  );
} else {
  alert("Bueno, veo que no tienes ganas de calcular distancias entre años.");
}
