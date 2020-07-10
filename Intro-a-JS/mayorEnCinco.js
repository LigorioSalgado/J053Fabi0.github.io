var uno, dos, tres, cuatro, cinco;
while (true) {
  alert("Te pediré 5 números.");
  uno = prompt("Primero");
  dos = prompt("Segundo");
  tres = prompt("Tercero");
  cuatro = prompt("Cuarto");
  cinco = prompt("Quinto");
  if (
    !isNaN(uno) &&
    !isNaN(dos) &&
    !isNaN(tres) &&
    !isNaN(cuatro) &&
    !isNaN(cinco)
  ) {
    break;
  } else {
    alert(
      "Lo siento, uno o más de los número que ingresaste no parecen ser números. ¿Podrías evitar usar espacios o letras?"
    );
  }
}

uno = parseInt(uno);
dos = parseInt(dos);
tres = parseInt(tres);
cuatro = parseInt(cuatro);
cinco = parseInt(cinco);

if (uno > dos && uno > tres && uno > cuatro && uno > cinco) {
  alert(`El ${uno} es mayor.`);
} else if (dos > uno && dos > tres && dos > cuatro && dos > cinco) {
  alert(`El ${dos} es mayor.`);
} else if (tres > dos && tres > uno && tres > cuatro && tres > cinco) {
  alert(`El ${tres} es mayor.`);
} else if (cuatro > dos && cuatro > tres && cuatro > uno && cuatro > cinco) {
  alert(`El ${cuatro} es mayor.`);
} else if (cinco > dos && cinco > tres && cinco > cuatro && cinco > uno) {
  alert(`El ${cinco} es mayor.`);
} else {
  alert("Alguno de los números son iguales, así que no hay un número mayor.");
}
