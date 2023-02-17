$(document).ready(function () {
  
      listaDeputados();

      function listaDeputados(){
          // LER OS EVENTOS
          $.getJSON('https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome', function(data) {

                //alert(data["dados"][0].nome);

              $.each(data["dados"], function(chave, valor){
                  
                  // É necessário usar o acento grave para envolver o texto para fazer interpolação em jQuery
                  link = `<a class='btn btn-success' data-bs-toggle='modal' data-bs-target='#exampleModal' href='deputadoDetalhes.html?id=${valor.id}'><i class="bi bi-person-lines-fill"></i> Detalhes</a>`;

                  var tabela = "<tr>\
                  <td class=''><img src=" + valor.urlFoto + " class='fotinha'></td>\
                  <td class='align-middle fs-5'>"+ valor.nome +"</td>\
                  <td class='align-middle fs-5'>" + valor.siglaPartido + "</td>\
                  <td class='align-middle fs-5'>" + valor.siglaUf + "</td>\
                  <td class='align-middle'>" + link + "</td>\
                  </tr>";

                  $('#lista').append(tabela);
              });
            });       
      } 
});