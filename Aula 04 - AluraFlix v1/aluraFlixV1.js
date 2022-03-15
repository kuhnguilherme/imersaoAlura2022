var filmes = [
  "http://is5.mzstatic.com/image/thumb/Video125/v4/a6/f2/6e/a6f26e61-2355-24f8-2687-47a665183327/source/100000x100000-999.jpg",
  "http://is5.mzstatic.com/image/thumb/Video128/v4/92/9d/ac/929dacc5-16e6-93ab-3921-45597ade831c/source/100000x100000-999.jpg",
  "http://is5.mzstatic.com/image/thumb/Video118/v4/e3/ee/75/e3ee756b-f3d7-0a32-7b6d-8f437deae34b/source/100000x100000-999.jpg",
  "http://is5.mzstatic.com/image/thumb/Video118/v4/fd/e2/de/fde2de45-3ff2-68f9-ff1c-9aa22566b06f/source/100000x100000-999.jpg"
];

//filmes.push("Shrek V", "Shrek VI");

var i;

for (i = 0; i < filmes.length; i++) {
  document.write("<img src=" + filmes[i] + ">");
}