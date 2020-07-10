var num;
while (true) {
  num = prompt(
    "Dame un número y te diré cuántos números primos hay desde la unidad hasta ese número"
  );
  if (!isNaN(parseInt(num))) {
    if (parseInt(num) >= 1) {
      break;
    }
  } else {
    alert(
      "Creo que has metido cosas que no son números. ¿Puedes darme solo números? Quizá sin espacios o letras."
    );
  }
}

nun = parseInt(num);

function isPrime(n) {
  var bool = true;
  for (i = 2; i < n; i++) {
    if ((n / i) % 1 === 0) {
      bool = false;
    }
  }
  return bool;
}

for (i = 2; i < num; i++) {
  var bool = true;
  for (j = 2; j < i; j++) {
    if ((i / j) % 1 === 0) {
      bool = false;
      break;
    }
  }
  document.write(bool ? `${i}<br>` : "");
}

document.write(`Encontré ${contador} números primos.`);
