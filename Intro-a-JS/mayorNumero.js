var uno, dos, tres;
while (true) {
  uno = prompt("Dame el primer número");
  dos = prompt("Dame el segundo número");
  tres = prompt("Dame el tercer número");
  if (!isNaN(uno) && !isNaN(dos) && !isNaN(tres)) {
    break;
  } else {
    alert(
      "Lo siento, uno de tus números no era un número. ¿Podrías evitar usar espacios o letras?"
    );
  }
}

uno = parseInt(uno);
dos = parseInt(dos);
tres = parseInt(tres);

if (uno > dos && uno > tres) {
  alert(`${uno} es mayor que ${dos} o ${tres}.`);
} else if (dos > uno && dos > tres) {
  alert(`${dos} es mayor que ${uno} o ${tres}.`);
} else if (tres > uno && tres > dos) {
  alert(`${tres} es mayor que ${dos} o ${uno}.`);
} else {
  alert("Alguno de los números son iguales, así que no hay un número mayor.");
}
