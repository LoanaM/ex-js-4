

var bombarray = [];
for (var i = 0; i < 16; i++) {
  number = Math.floor((Math.random() * 100) + 1);
  bombarray.push(number)
}
console.log(bombarray);


result = true
punteggio = -1;

do {
  var guess = prompt ("Inserisci un numero:");
  punteggio ++;
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
