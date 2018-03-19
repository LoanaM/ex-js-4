
var bombarray = [];
var difficulty = prompt ("Scegli la difficoltà: facile, normale o difficile")
if (difficulty=="difficile") {
  for (var i = 0; i < 16; i++) {
    number = Math.floor((Math.random() * 100) + 1);
    bombarray.push(number)
  }
}
else if (difficulty=="facile") {
  for (var i = 0; i < 16; i++) {
    number = Math.floor((Math.random() * 50) + 1);
    bombarray.push(number)
  }
}
else {
  for (var i = 0; i < 16; i++) {
    number = Math.floor((Math.random() * 80) + 1);
    bombarray.push(number)
  }
}

console.log(bombarray);


result = true
punteggio = -1;

do {
  var guess = prompt ("Inserisci un numero:");
  if (guess!=""){
    punteggio ++;
  }
  for(var u = 0; u < bombarray.length; u++) {
    if(guess==bombarray[u]) {
      result = false
    }
  }
} while (result==true)


if (result==false) {
  alert ("Hai perso!");
  document.write ("Hai totalizzato " + punteggio + " punti");
}
