var fiboString = "1, 1";
var temp1 = 1;
var temp2 = 1;
for (i = 0; i < 19; i++) {
  var otroTemp_xd = temp1 + temp2;
  fiboString = `${fiboString}, ${otroTemp_xd}`;
  temp1 = temp2;
  temp2 = otroTemp_xd;
}

document.write(fiboString);
