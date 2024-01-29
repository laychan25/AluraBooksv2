const botao = document.querySelectorAll('.btn')

botao.forEach(btn => btn.addEventListener('click', filtrarLivros))

 function filtrarLivros(){
    const elementoBtn= document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorcategoria(categoria)
    mostarLivros(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotal=  calculaValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivros(valorTotal)

    }

}

function filtrarPorcategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivros(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML =`
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `


}