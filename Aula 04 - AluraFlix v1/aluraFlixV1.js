var filmes = [
  "Shrek I",
  "Shrek II",
  "Shrek III"
];

filmes.push("Shrek IV");
filmes.push("Shrek V", "Shrek VI");

var i;

for (i = 0; i < filmes.length; i++) {
  document.write("<p>" + filmes[i] + "</p>");
}