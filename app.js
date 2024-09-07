function pesquisar() {
  let section = document.getElementById('resultados-pesquisa');
  //console.log(section);

  let campoPesquisa = document.getElementById('campo-pesquisa').value;

  // Se campoPesquisa for uma String sem nada
  if (campoPesquisa == '') {
    section.innerHTML =
      '<p class="sem-resultados"><strong>Nada foi encontrado. Você precisa digitar o nome de um planeta.</strong></p>';
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = '';

  let titulo = '';
  let descricao = '';
  let tags = '';

  // para cada dado dentro da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // Se no dado.titulo.includes o campoPesquisa
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // cria um novo elemento

      resultados += `
<div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
                      
          <div class="link-container">
    <a href=${dado.links.informacoes} target="_blank" class="link-button"><strong>Mais informações</strong></a>
    <a href=${dado.links.imagem} target="_blank" class="link-button"><strong>Foto Planeta</strong></a>
  </div>
        </div>
`;
    }
  }

  if (!resultados) {
    resultados =
      '<p class="sem-resultados"><strong>Nada foi encontrado 👨‍🚀</strong></p>';
  }

  section.innerHTML = resultados;
}
