var num;
while (true) {
  num = prompt(
    "Dame un número y yo contaré desde el 1 hasta ese número, así es."
  );
  if (!isNaN(parseInt(num))) {
    break;
  } else {
    alert(
      "Creo que has metido cosas que no son números. ¿Puedes darme solo números? Quizá sin espacios o letras."
    );
  }
}

if (num < 1) {
  for (i = num; i <= 1; i++) {
    document.write(i + "<br>");
  }
} else {
  for (i = num; i >= 1; i--) {
    document.write(i + "<br>");
  }
}
