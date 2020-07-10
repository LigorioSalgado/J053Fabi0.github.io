var year;
while (true) {
  year = prompt("Dame el año.");
  if (!isNaN(year)) {
    break;
  } else {
    alert(
      "Lo siento, el año que pusiste no parece un número. ¿Podrías evitar usar espacios o letras?|, "
    );
  }
}

year = parseInt(year);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
  alert(`El año ${year} es bisiesto.`);
} else {
  alert(`El año ${year} no es bisiesto.`);
}
