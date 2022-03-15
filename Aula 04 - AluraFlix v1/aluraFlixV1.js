var filmes = [];

function cadastrar() {
  
  var link = "<img src=" + document.getElementById("linkimg").value + ">";
  
  if (checarFilme(link) == false) {
    filmes.push(link);
    document.getElementById("imagens").innerHTML = filmes;
  }else{
    
  }
}

function checarFilme(elemento) {
  for (var j = 0; j < filmes.length; j++)
    if (elemento == filmes[j]) {
      window.alert("Este pôster já existe!");
      return true;
    }
  return false;
}