let livros = []
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'



buscarLivrosDaApi()

async function buscarLivrosDaApi(){
    const res= await fetch(endpointDaApi)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    console.log(livros)
    mostarLivros(livrosComDesconto)

}

 